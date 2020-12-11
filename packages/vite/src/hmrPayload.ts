export type HMRPayload =
  | ConnectedPayload
  | UpdatePayload
  | FullReloadPayload
  | StyleRemovePayload
  | CustomPayload
  | MultiUpdatePayload

export interface ConnectedPayload {
  type: 'connected'
}

export interface UpdatePayload {
  type: 'js-update' | 'style-update'
  path: string
  changedPath: string
  timestamp: number
}

export interface StyleRemovePayload {
  type: 'style-remove'
  path: string
}

export interface FullReloadPayload {
  type: 'full-reload'
  id?: string
}

export interface CustomPayload {
  type: 'custom'
  path: string
  customData: any
}

export interface MultiUpdatePayload {
  type: 'multi'
  updates: UpdatePayload[]
}