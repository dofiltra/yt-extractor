export interface IYtChannelAboutResponse {
  page?: string
  rootVe?: string
  response?: Response
  xsrf_token?: string
  url?: string
  timing?: Timing
}

export interface Response {
  responseContext?: ResponseContext
  contents?: Contents
  header?: ResponseHeader
  metadata?: Metadata
  trackingParams?: string
  topbar?: Topbar
}

export interface Contents {
  singleColumnBrowseResultsRenderer?: SingleColumnBrowseResultsRenderer
}

export interface SingleColumnBrowseResultsRenderer {
  tabs?: Tab[]
}

export interface Tab {
  tabRenderer?: TabRenderer
}

export interface TabRenderer {
  endpoint?: TabRendererEndpoint
  title?: string
  selected?: boolean
  content?: TabRendererContent
  trackingParams?: string
}

export interface TabRendererContent {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  continuations?: Continuation[]
  trackingParams?: string
  contents?: SectionListRendererContent[]
}

export interface SectionListRendererContent {
  itemSectionRenderer?: ItemSectionRenderer
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
  header?: ItemSectionRendererHeader
}

export interface ItemSectionRendererContent {
  channelAboutMetadataRenderer?: ChannelAboutMetadataRenderer
}

export interface ChannelAboutMetadataRenderer {
  description?: ButtonText
  viewCountText?: ViewCountText
  joinedDateText?: ButtonText
  canonicalChannelUrl?: string
  bypassBusinessEmailCaptcha?: boolean
  title?: ButtonText
  avatar?: Avatar
  country?: ButtonText
  showDescription?: boolean
  actionButtons?: ActionButton[]
}

export interface ActionButton {
  buttonRenderer?: ActionButtonButtonRenderer
}

export interface ActionButtonButtonRenderer {
  style?: string
  size?: string
  text?: ButtonText
  serviceEndpoint?: PurpleServiceEndpoint
  icon?: Icon
  accessibility?: AccessibilityAccessibilityData
  trackingParams?: string
  accessibilityData?: SubscribeAccessibilityClass
}

export interface AccessibilityAccessibilityData {
  label?: string
}

export interface SubscribeAccessibilityClass {
  accessibilityData?: AccessibilityAccessibilityData
}

export interface Icon {
  iconType?: string
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  getReportFormEndpoint?: GetReportFormEndpoint
}

export interface ServiceEndpointCommandMetadata {
  webCommandMetadata?: PurpleWebCommandMetadata
}

export interface PurpleWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: string
}

export interface GetReportFormEndpoint {
  params?: string
}

export interface ButtonText {
  runs?: ButtonTextRun[]
}

export interface ButtonTextRun {
  text?: string
}

export interface Avatar {
  thumbnails?: Thumbnail[]
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface ViewCountText {
  runs?: ViewCountTextRun[]
}

export interface ViewCountTextRun {
  text?: string
  bold?: boolean
}

export interface ItemSectionRendererHeader {
  itemSectionHeaderRenderer?: ItemSectionHeaderRenderer
}

export interface ItemSectionHeaderRenderer {
  title?: ButtonText
}

export interface Continuation {
  reloadContinuationData?: ReloadContinuationData
}

export interface ReloadContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface TabRendererEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: PurpleBrowseEndpoint
}

export interface PurpleBrowseEndpoint {
  browseId?: string
  params?: string
  canonicalBaseUrl?: string
}

export interface EndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  url?: string
  webPageType?: string
  rootVe?: number
  apiUrl?: string
}

export interface ResponseHeader {
  c4TabbedHeaderRenderer?: C4TabbedHeaderRenderer
}

export interface C4TabbedHeaderRenderer {
  channelId?: string
  title?: string
  navigationEndpoint?: NavigationEndpoint
  avatar?: Avatar
  banner?: Avatar
  subscribeButton?: SubscribeButton
  visitTracking?: VisitTracking
  subscriberCountText?: SubscriberCountText
  tvBanner?: Avatar
  mobileBanner?: Avatar
  trackingParams?: string
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: NavigationEndpointBrowseEndpoint
}

export interface NavigationEndpointBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: ButtonText
  subscriberCountText?: ButtonText
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: string
  showPreferences?: boolean
  subscriberCountWithSubscribeText?: ButtonText
  subscribedButtonText?: ButtonText
  unsubscribedButtonText?: ButtonText
  trackingParams?: string
  unsubscribeButtonText?: ButtonText
  longSubscriberCountText?: SubscriberCountText
  shortSubscriberCountText?: ButtonText
  subscribeAccessibility?: SubscribeAccessibilityClass
  unsubscribeAccessibility?: SubscribeAccessibilityClass
  onSubscribeEndpoints?: OnSubscribeEndpoint[]
  onUnsubscribeEndpoints?: OnUnsubscribeEndpoint[]
}

export interface SubscriberCountText {
  runs?: ButtonTextRun[]
  accessibility?: SubscribeAccessibilityClass
}

export interface OnSubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  subscribeEndpoint?: SubscribeEndpoint
}

export interface SubscribeEndpoint {
  channelIds?: string[]
  params?: string
}

export interface OnUnsubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: SignalServiceEndpoint
}

export interface OnUnsubscribeEndpointCommandMetadata {
  webCommandMetadata?: TentacledWebCommandMetadata
}

export interface TentacledWebCommandMetadata {
  sendPost?: boolean
}

export interface SignalServiceEndpoint {
  signal?: string
  actions?: Action[]
}

export interface Action {
  clickTrackingParams?: string
  openPopupAction?: OpenPopupAction
}

export interface OpenPopupAction {
  popup?: Popup
  popupType?: string
}

export interface Popup {
  confirmDialogRenderer?: ConfirmDialogRenderer
}

export interface ConfirmDialogRenderer {
  trackingParams?: string
  dialogMessages?: ButtonText[]
  confirmButton?: Button
  cancelButton?: Button
  primaryIsCancel?: boolean
}

export interface Button {
  buttonRenderer?: CancelButtonButtonRenderer
}

export interface CancelButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  text?: ButtonText
  accessibility?: AccessibilityAccessibilityData
  trackingParams?: string
  serviceEndpoint?: FluffyServiceEndpoint
}

export interface FluffyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
}

export interface VisitTracking {
  remarketingPing?: string
}

export interface Metadata {
  channelMetadataRenderer?: ChannelMetadataRenderer
}

export interface ChannelMetadataRenderer {
  title?: string
  description?: string
  rssUrl?: string
  channelConversionUrl?: string
  externalId?: string
  keywords?: string
  ownerUrls?: string[]
  avatar?: Avatar
  channelUrl?: string
  isFamilySafe?: boolean
  availableCountryCodes?: string[]
  androidDeepLink?: string
  androidAppindexingLink?: string
  iosAppindexingLink?: string
  tabPath?: string
  vanityChannelUrl?: string
}

export interface ResponseContext {
  serviceTrackingParams?: ServiceTrackingParam[]
  maxAgeSeconds?: number
  webResponseContextExtensionData?: WebResponseContextExtensionData
}

export interface ServiceTrackingParam {
  service?: string
  params?: Param[]
}

export interface Param {
  key?: string
  value?: string
}

export interface WebResponseContextExtensionData {
  ytConfigData?: YtConfigData
  hasDecorated?: boolean
}

export interface YtConfigData {
  visitorData?: string
  sessionIndex?: number
  rootVisualElementType?: number
}

export interface Topbar {
  mobileTopbarRenderer?: MobileTopbarRenderer
}

export interface MobileTopbarRenderer {
  trackingParams?: string
  searchCommand?: SearchCommand
  topbarLogo?: TopbarLogo
}

export interface SearchCommand {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  searchEndpoint?: SearchEndpoint
}

export interface SearchEndpoint {
  params?: string
  hack?: boolean
}

export interface TopbarLogo {
  topbarLogoRenderer?: TopbarLogoRenderer
}

export interface TopbarLogoRenderer {
  iconImage?: Icon
  tooltipText?: ButtonText
  endpoint?: TopbarLogoRendererEndpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface TopbarLogoRendererEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: FluffyBrowseEndpoint
}

export interface FluffyBrowseEndpoint {
  browseId?: string
}

export interface Timing {
  info?: Info
}

export interface Info {
  st?: number
}
