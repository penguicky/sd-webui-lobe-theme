/**
 * Virtualized Extra Network Component
 * Demonstrates virtual scrolling for model cards in the sidebar
 */

import { createStyles } from 'antd-style';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { VirtualGrid, useDynamicItemSize, useVirtualScrollingMetrics, virtualScrollingPresets } from './index';

interface ModelCard {
  id: string;
  name: string;
  preview?: string | undefined;
  size?: string | undefined;
  tags?: string[] | undefined;
  type: string;
}

interface VirtualizedExtraNetworkProps {
  className?: string;
  containerHeight: number;
  containerWidth: number;
  onCardClick?: (card: ModelCard) => void;
  searchQuery?: string;
  selectedType?: string;
}

const useStyles = createStyles(({ css, token }) => ({
  card: css`
    display: flex;
    flex-direction: column;
    background: ${token.colorBgElevated};
    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadiusSM}px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      border-color: ${token.colorPrimary};
      box-shadow: ${token.boxShadowSecondary};
      transform: translateY(-1px);
    }
  `,
  
  cardInfo: css`
    padding: 8px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  
  cardMeta: css`
    font-size: 10px;
    color: ${token.colorTextSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  
  cardName: css`
    font-size: 12px;
    font-weight: 500;
    color: ${token.colorText};
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  
  cardPreview: css`
    width: 100%;
    height: 60%;
    background: ${token.colorFillTertiary};
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }
  `,
  
  cardType: css`
    background: ${token.colorFillSecondary};
    padding: 2px 6px;
    border-radius: ${token.borderRadiusXS}px;
    font-size: 9px;
    text-transform: uppercase;
    font-weight: 600;
  `,
  
  container: css`
    position: relative;
    background: ${token.colorBgContainer};
    border-radius: ${token.borderRadius}px;
    overflow: hidden;
  `,
  
  loadingCard: css`
    background: ${token.colorFillTertiary};
    border-radius: ${token.borderRadiusSM}px;
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        ${token.colorFillSecondary},
        transparent
      );
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `,
  
  metricsOverlay: css`
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: ${token.borderRadiusXS}px;
    font-size: 10px;
    font-family: ${token.fontFamilyCode};
    z-index: 10;
    pointer-events: none;
  `,
}));

// Mock data generator for demonstration
const generateMockCards = (count: number): ModelCard[] => {
  const types = ['checkpoint', 'lora', 'embedding', 'hypernetwork', 'vae'];
  const names = [
    'Realistic Vision', 'DreamShaper', 'Anything V3', 'Stable Diffusion',
    'Waifu Diffusion', 'NovelAI', 'Midjourney Style', 'Photorealistic',
    'Anime Style', 'Digital Art', 'Oil Painting', 'Watercolor',
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `model-${i}`,
    name: `${names[i % names.length]} ${Math.floor(i / names.length) + 1}`,
    preview: Math.random() > 0.3 ? `https://picsum.photos/150/200?random=${i}` : undefined,
    size: `${(Math.random() * 5 + 0.5).toFixed(1)}GB`,
    tags: ['tag1', 'tag2', 'tag3'].slice(0, Math.floor(Math.random() * 3) + 1),
    type: types[i % types.length] as string,
  }));
};

const VirtualizedExtraNetwork = memo<VirtualizedExtraNetworkProps>(({
  containerHeight,
  containerWidth,
  onCardClick,
  searchQuery = '',
  selectedType = '',
  className,
}) => {
  const { styles, cx } = useStyles();
  const [cards] = useState(() => generateMockCards(1000)); // Simulate 1000 model cards
  const [showMetrics, setShowMetrics] = useState(false);
  const { metrics, updateMetrics } = useVirtualScrollingMetrics();
  
  // Filter cards based on search and type
  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const matchesSearch = !searchQuery || 
        card.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || card.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [cards, searchQuery, selectedType]);

  // Calculate dynamic item size based on container
  const { itemWidth, itemHeight, gap } = useDynamicItemSize(
    virtualScrollingPresets.modelCards.itemWidth,
    virtualScrollingPresets.modelCards.itemHeight,
    containerWidth,
    virtualScrollingPresets.modelCards.minItems,
    virtualScrollingPresets.modelCards.maxItems
  );

  // Render individual card
  const renderCard = useCallback((card: ModelCard) => {
    const handleClick = () => onCardClick?.(card);
    
    return (
      <div
        className={styles.card}
        onClick={handleClick}
        title={`${card.name} (${card.type})`}
      >
        <div
          className={styles.cardPreview}
          style={{
            backgroundImage: card.preview ? `url(${card.preview})` : undefined,
          }}
        />
        <div className={styles.cardInfo}>
          <div className={styles.cardName}>{card.name}</div>
          <div className={styles.cardMeta}>
            <span className={styles.cardType}>{card.type}</span>
            {card.size && <span>{card.size}</span>}
          </div>
        </div>
      </div>
    );
  }, [styles, onCardClick]);

  // Handle scroll events for metrics
  const handleScroll = useCallback((scrollTop: number) => {
    const visibleItems = Math.ceil(containerHeight / (itemHeight + gap));
    updateMetrics(visibleItems, filteredCards.length, scrollTop);
  }, [containerHeight, itemHeight, gap, updateMetrics, filteredCards.length]);

  // Get item key for React optimization
  const getItemKey = useCallback((card: ModelCard) => card.id, []);

  // Toggle metrics display (for development/debugging)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        setShowMetrics(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={cx(styles.container, className)}>
      {showMetrics && (
        <div className={styles.metricsOverlay}>
          Rendered: {metrics.renderedItems}/{metrics.totalItems} 
          ({(metrics.renderRatio * 100).toFixed(1)}%)
          <br />
          Scroll: {metrics.scrollPosition.toFixed(0)}px
        </div>
      )}
      
      <VirtualGrid
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        gap={gap}
        getItemKey={getItemKey}
        itemHeight={itemHeight}
        itemWidth={itemWidth}
        items={filteredCards}
        onScroll={handleScroll}
        overscan={virtualScrollingPresets.modelCards.overscan}
        renderItem={renderCard}
      />
    </div>
  );
});

VirtualizedExtraNetwork.displayName = 'VirtualizedExtraNetwork';

export default VirtualizedExtraNetwork;

// Hook for integrating with existing ExtraNetwork sidebar
export const useVirtualizedExtraNetwork = (
  containerRef: React.RefObject<HTMLElement>,
  enabled: boolean = true
) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    // Initial dimensions
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ height, width });
  }, [containerRef, enabled]);

  // Use pooled ResizeObserver with debouncing for better performance
  const { usePooledResizeObserver } = require('@/hooks/useObserverPool');

  usePooledResizeObserver(
    enabled ? containerRef.current : null,
    () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ height, width });
      }
    },
    'virtualized-extra-network-resize',
    100, // 100ms debounce for resize events
  );
  
  return {
    dimensions,
    shouldUseVirtualization: enabled && dimensions.height > 0,
  };
};

export type { ModelCard, VirtualizedExtraNetworkProps };
