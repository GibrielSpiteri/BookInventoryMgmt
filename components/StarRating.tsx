'use client';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
    disabled: boolean;
    savedRating: number | null;
    onRatingChange?: (newRating: number) => void; // Callback function prop
}

export default function StarRating({ disabled, savedRating, onRatingChange }: StarRatingProps) {
    const [rating, setRating] = useState<number>(0);
    const [ratingColor, setColor] = useState<number | null>(savedRating);
    const handleRatingClick = (newRating: number) => {
        console.log(newRating);
        setRating(newRating); // Update the state with the new rating
        setColor(newRating);
        if (onRatingChange) {
            onRatingChange(newRating);
        } // Call the callback function with the new rating
    };
    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                if (disabled) {
                    return (
                        <>
                            <label>
                                <FaStar
                                    aria-disabled={disabled}
                                    size={40}
                                    color={currentRating <= (ratingColor || rating) ? 'yellow' : 'grey'}
                                />
                            </label>
                        </>
                    );
                }
                return (
                    <>
                        <label>
                            <input
                                value={currentRating}
                                // checked={currentRating === rating}
                                onClick={() => handleRatingClick(currentRating)}
                                type="radio"
                                name="rate"
                                aria-disabled={disabled}
                                hidden
                            />
                            <FaStar
                                aria-disabled={disabled}
                                size={40}
                                color={currentRating <= (ratingColor || rating) ? 'yellow' : 'grey'}
                            />
                        </label>
                    </>
                );
            })}
        </>
    );
}
