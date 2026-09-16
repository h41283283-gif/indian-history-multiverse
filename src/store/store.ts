import { create } from 'zustand'
import { NavigationState, UIState, HistoricalNode } from '../types'

interface AppState extends NavigationState, UIState {
  nodes: Map<string, HistoricalNode>
  selectedNode: HistoricalNode | null
  cameraTarget: [number, number, number]
  
  // Navigation
  navigateTo: (nodeId: string) => void
  goBack: () => void
  setSelectedNode: (node: HistoricalNode | null) => void
  setCameraTarget: (target: [number, number, number]) => void
  
  // UI
  toggleSearch: () => void
  toggleInfo: () => void
  toggleTimeline: () => void
  toggleTour: () => void
  toggleSettings: () => void
  setQuality: (quality: 'low' | 'medium' | 'high') => void
  toggleReducedMotion: () => void
  
  // Data
  setNodes: (nodes: HistoricalNode[]) => void
  getNodeById: (id: string) => HistoricalNode | undefined
  getChildNodes: (parentId: string) => HistoricalNode[]
}

export const useStore = create<AppState>((set, get) => ({
  currentNodeId: 'hub',
  breadcrumbs: ['hub'],
  history: ['hub'],
  showSearch: false,
  showInfo: false,
  showTimeline: false,
  showTour: false,
  showSettings: false,
  quality: 'high',
  reducedMotion: false,
  nodes: new Map(),
  selectedNode: null,
  cameraTarget: [0, 0, 0],
  
  navigateTo: (nodeId: string) => {
    set((state) => ({
      currentNodeId: nodeId,
      breadcrumbs: [...state.breadcrumbs, nodeId],
      history: [...state.history, nodeId],
    }))
  },
  
  goBack: () => {
    const state = get()
    if (state.breadcrumbs.length > 1) {
      const newBreadcrumbs = state.breadcrumbs.slice(0, -1)
      set((state) => ({
        currentNodeId: newBreadcrumbs[newBreadcrumbs.length - 1],
        breadcrumbs: newBreadcrumbs,
      }))
    }
  },
  
  setSelectedNode: (node) => set({ selectedNode: node, showInfo: !!node }),
  setCameraTarget: (target) => set({ cameraTarget: target }),
  
  toggleSearch: () => set((state) => ({ showSearch: !state.showSearch })),
  toggleInfo: () => set((state) => ({ showInfo: !state.showInfo })),
  toggleTimeline: () => set((state) => ({ showTimeline: !state.showTimeline })),
  toggleTour: () => set((state) => ({ showTour: !state.showTour })),
  toggleSettings: () => set((state) => ({ showSettings: !state.showSettings })),
  
  setQuality: (quality) => set({ quality }),
  toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),
  
  setNodes: (nodes) => {
    const nodeMap = new Map(nodes.map((n) => [n.id, n]))
    set({ nodes: nodeMap })
  },
  
  getNodeById: (id) => get().nodes.get(id),
  
  getChildNodes: (parentId) => {
    const nodes = Array.from(get().nodes.values())
    return nodes.filter((n) => n.parentId === parentId)
  },
}))
