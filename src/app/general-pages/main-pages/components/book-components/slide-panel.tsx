'use client';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import * as React from 'react';

interface HorizontalSliderProps {
  children: React.ReactNode;
  scrollAmount?: number;
  sectionHeader?: string;
}

// This component creates a horizontal slider with left and right navigation buttons to scroll through the books the user can explore
export const HorizontalSlider = ({
  children,
  scrollAmount = 600,
  sectionHeader = "Section Header"
}: HorizontalSliderProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div>
    <h1 style={{ textAlign: 'left', marginBottom: '16px',  padding: '20px 0px 10px 10px', fontSize: '24px', fontWeight: 'bold' }}>
        {sectionHeader}
    </h1>
    <Box display="flex" alignItems="center" width="100%" justifyContent="center">
      <IconButton onClick={() => scroll('left')}>
        <ChevronLeft />
      </IconButton>
      
      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: 2,
            padding: 1,
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            '&::-webkit-scrollbar': {
              display: 'none', // Chrome/Safari
            },
          }}
        >
          {children}
        </Box>
      </Box>

      <IconButton onClick={() => scroll('right')}>
        <ChevronRight />
      </IconButton>
    </Box>
    </div>
  );
};

export default HorizontalSlider;