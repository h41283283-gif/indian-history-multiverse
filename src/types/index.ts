export type NodeType = 'era' | 'galaxy' | 'system' | 'planet' | 'asteroid'

export type IconType = 'seal' | 'pillar' | 'temple' | 'fort' | 'train' | 'flag' | 'book' | 'person' | 'monument' | 'wheel' | 'scroll'

export interface HistoricalNode {
  id: string
  type: NodeType
  name: string
  period?: string
  description: string
  keyPoints?: string[]
  related?: string[]
  sources?: string[]
  parentId?: string
  position?: [number, number, number]
  color?: string
  icon?: IconType
  imageUrl?: string
}

export interface NavigationState {
  currentNodeId: string | null
  breadcrumbs: string[]
  history: string[]
}

export interface UIState {
  showSearch: boolean
  showInfo: boolean
  showTimeline: boolean
  showTour: boolean
  showSettings: boolean
  quality: 'low' | 'medium' | 'high'
  reducedMotion: boolean
}
