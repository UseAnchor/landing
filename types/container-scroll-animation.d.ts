declare module '@/components/ui/container-scroll-animation' {
  import React from 'react';

  export const ContainerScroll: React.FC<{
    titleComponent: React.ReactNode;
    children: React.ReactNode;
  }>;
}
