import React, { useState, createContext, useContext } from 'react';
import { Course } from '../data/courseData';
interface CartContextType {
  cartItems: Course[];
  addToCart: (course: Course) => boolean;
  removeFromCart: (courseCode: string) => void;
  clearCart: () => void;
  isInCart: (courseCode: string) => boolean;
  hasTimeConflict: (course: Course) => boolean;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
interface CartProviderProps {
  children: ReactNode;
}
export const CartProvider: React.FC<CartProviderProps> = ({
  children
}) => {
  const [cartItems, setCartItems] = useState<Course[]>([]);
  // Check if a course has time conflicts with courses in cart
  const hasTimeConflict = (course: Course): boolean => {
    for (const cartItem of cartItems) {
      if (cartItem.code === course.code) continue;
      for (const cartTime of cartItem.time) {
        for (const courseTime of course.time) {
          if (cartTime.day === courseTime.day) {
            const cartStart = convertTimeToMinutes(cartTime.start);
            const cartEnd = convertTimeToMinutes(cartTime.end);
            const courseStart = convertTimeToMinutes(courseTime.start);
            const courseEnd = convertTimeToMinutes(courseTime.end);
            // Check for overlap
            if (courseStart >= cartStart && courseStart < cartEnd || courseEnd > cartStart && courseEnd <= cartEnd || courseStart <= cartStart && courseEnd >= cartEnd) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  // Convert time string (e.g., "09:00") to minutes for easier comparison
  const convertTimeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const addToCart = (course: Course): boolean => {
    if (isInCart(course.code)) {
      return false;
    }
    if (hasTimeConflict(course)) {
      return false;
    }
    setCartItems([...cartItems, course]);
    return true;
  };
  const removeFromCart = (courseCode: string): void => {
    setCartItems(cartItems.filter(item => item.code !== courseCode));
  };
  const clearCart = (): void => {
    setCartItems([]);
  };
  const isInCart = (courseCode: string): boolean => {
    return cartItems.some(item => item.code === courseCode);
  };
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    hasTimeConflict
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};