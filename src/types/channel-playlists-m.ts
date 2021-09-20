export interface IYtChannelPlaylistsResponse {
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
  header?: Header
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
  endpoint?: ContentTypeSubMenuItemEndpoint
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
  subMenu?: SubMenu
  targetId?: string
}

export interface SectionListRendererContent {
  itemSectionRenderer?: ItemSectionRenderer
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
  targetId?: string
}

export interface ItemSectionRendererContent {
  compactPlaylistRenderer?: CompactPlaylistRenderer
}

export interface CompactPlaylistRenderer {
  playlistId?: string
  thumbnail?: Avatar
  title?: ButtonText
  shortBylineText?: BylineText
  videoCountText?: ButtonText
  navigationEndpoint?: NavigationEndpointClass
  videoCountShortText?: ButtonText
  trackingParams?: string
  sidebarThumbnails?: Avatar[]
  thumbnailText?: ThumbnailText
  shareUrl?: string
  thumbnailRenderer?: ThumbnailRenderer
  longBylineText?: BylineText
}

export interface BylineText {
  runs?: LongBylineTextRun[]
}

export interface LongBylineTextRun {
  text?: Title
  navigationEndpoint?: NavigationEndpoint
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: PurpleBrowseEndpoint
}

export interface PurpleBrowseEndpoint {
  browseId?: ID
  canonicalBaseUrl?: CanonicalBaseURL
}

export enum ID {
  UCY0XL8V6NzzFcwzHCGB8OrQ = 'UCY0xL8V6NzzFcwzHCgB8orQ'
}

export enum CanonicalBaseURL {
  CDappUniversity = '/c/DappUniversity'
}

export interface NavigationEndpointCommandMetadata {
  webCommandMetadata?: PurpleWebCommandMetadata
}

export interface PurpleWebCommandMetadata {
  url?: string
  webPageType?: WebPageType
  rootVe?: number
  apiUrl?: APIURL
}

export enum APIURL {
  YoutubeiV1Browse = '/youtubei/v1/browse'
}

export enum WebPageType {
  WebPageTypeBrowse = 'WEB_PAGE_TYPE_BROWSE',
  WebPageTypeChannel = 'WEB_PAGE_TYPE_CHANNEL',
  WebPageTypePlaylist = 'WEB_PAGE_TYPE_PLAYLIST',
  WebPageTypeSearch = 'WEB_PAGE_TYPE_SEARCH'
}

export enum Title {
  DappUniversity = 'Dapp University'
}

export interface NavigationEndpointClass {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: FluffyBrowseEndpoint
}

export interface FluffyBrowseEndpoint {
  browseId?: string
}

export interface Avatar {
  thumbnails?: Thumbnail[]
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface ThumbnailRenderer {
  playlistVideoThumbnailRenderer?: PlaylistVideoThumbnailRenderer
}

export interface PlaylistVideoThumbnailRenderer {
  thumbnail?: Avatar
}

export interface ThumbnailText {
  runs?: ThumbnailTextRun[]
}

export interface ThumbnailTextRun {
  text?: string
  bold?: boolean
}

export interface ButtonText {
  runs?: ButtonTextRun[]
}

export interface ButtonTextRun {
  text?: string
}

export interface Continuation {
  reloadContinuationData?: ReloadContinuationData
}

export interface ReloadContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface SubMenu {
  channelSubMenuRenderer?: ChannelSubMenuRenderer
}

export interface ChannelSubMenuRenderer {
  contentTypeSubMenuItems?: SubMenuItem[]
  sortFilterSubMenuItems?: SubMenuItem[]
}

export interface SubMenuItem {
  endpoint?: ContentTypeSubMenuItemEndpoint
  title?: string
  selected?: boolean
}

export interface ContentTypeSubMenuItemEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: TentacledBrowseEndpoint
}

export interface TentacledBrowseEndpoint {
  browseId?: ID
  params?: string
  canonicalBaseUrl?: CanonicalBaseURL
}

export interface Header {
  c4TabbedHeaderRenderer?: C4TabbedHeaderRenderer
}

export interface C4TabbedHeaderRenderer {
  channelId?: ID
  title?: Title
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

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: ButtonText
  subscriberCountText?: ButtonText
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: ID
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

export interface SubscribeAccessibilityClass {
  accessibilityData?: AccessibilityDataClass
}

export interface AccessibilityDataClass {
  label?: string
}

export interface OnSubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnSubscribeEndpointCommandMetadata
  subscribeEndpoint?: SubscribeEndpoint
}

export interface OnSubscribeEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: string
}

export interface SubscribeEndpoint {
  channelIds?: ID[]
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
  buttonRenderer?: ButtonRenderer
}

export interface ButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  text?: ButtonText
  accessibility?: AccessibilityDataClass
  trackingParams?: string
  serviceEndpoint?: ServiceEndpoint
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnSubscribeEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
}

export interface VisitTracking {
  remarketingPing?: string
}

export interface Metadata {
  channelMetadataRenderer?: ChannelMetadataRenderer
}

export interface ChannelMetadataRenderer {
  title?: Title
  description?: string
  rssUrl?: string
  channelConversionUrl?: string
  externalId?: ID
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
  commandMetadata?: NavigationEndpointCommandMetadata
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
  iconImage?: IconImage
  tooltipText?: ButtonText
  endpoint?: NavigationEndpointClass
  trackingParams?: string
  overrideEntityKey?: string
}

export interface IconImage {
  iconType?: string
}

export interface Timing {
  info?: Info
}

export interface Info {
  st?: number
}
