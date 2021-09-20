export interface IYtChannelVideosResponse {
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
  compactVideoRenderer?: CompactVideoRenderer
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface CompactVideoRenderer {
  videoId?: string
  thumbnail?: Avatar
  title?: SubscriberCountText
  publishedTimeText?: ButtonText
  viewCountText?: ButtonText
  lengthText?: SubscriberCountText
  navigationEndpoint?: CompactVideoRendererNavigationEndpoint
  channelThumbnail?: Avatar
  trackingParams?: string
  shortViewCountText?: SubscriberCountText
  menu?: Menu
  thumbnailOverlays?: ThumbnailOverlay[]
  accessibility?: SubscribeAccessibilityClass
}

export interface SubscribeAccessibilityClass {
  accessibilityData?: AccessibilityDataClass
}

export interface AccessibilityDataClass {
  label?: string
}

export interface Avatar {
  thumbnails?: Thumbnail[]
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface SubscriberCountText {
  runs?: Run[]
  accessibility?: SubscribeAccessibilityClass
}

export interface Run {
  text?: string
}

export interface Menu {
  menuRenderer?: MenuRenderer
}

export interface MenuRenderer {
  items?: Item[]
  trackingParams?: string
  accessibility?: SubscribeAccessibilityClass
}

export interface Item {
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

export interface MenuServiceItemRenderer {
  text?: ButtonText
  serviceEndpoint?: MenuServiceItemRendererServiceEndpoint
  trackingParams?: string
}

export interface MenuServiceItemRendererServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  playlistEditEndpoint?: PlaylistEditEndpoint
}

export interface ServiceEndpointCommandMetadata {
  webCommandMetadata?: PurpleWebCommandMetadata
}

export interface PurpleWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: APIURL
}

export enum APIURL {
  YoutubeiV1Browse = '/youtubei/v1/browse',
  YoutubeiV1BrowseEditPlaylist = '/youtubei/v1/browse/edit_playlist',
  YoutubeiV1SubscriptionSubscribe = '/youtubei/v1/subscription/subscribe',
  YoutubeiV1SubscriptionUnsubscribe = '/youtubei/v1/subscription/unsubscribe'
}

export interface PlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: PlaylistEditEndpointAction[]
}

export interface PlaylistEditEndpointAction {
  addedVideoId?: string
  action?: ActionEnum
}

export enum ActionEnum {
  ActionAddVideo = 'ACTION_ADD_VIDEO'
}

export enum PlaylistID {
  Wl = 'WL'
}

export interface ButtonText {
  runs?: Run[]
}

export interface CompactVideoRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  watchEndpoint?: WatchEndpoint
}

export interface NavigationEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  url?: string
  webPageType?: WebPageType
  rootVe?: number
  apiUrl?: APIURL
}

export enum WebPageType {
  WebPageTypeBrowse = 'WEB_PAGE_TYPE_BROWSE',
  WebPageTypeChannel = 'WEB_PAGE_TYPE_CHANNEL',
  WebPageTypeSearch = 'WEB_PAGE_TYPE_SEARCH',
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface WatchEndpoint {
  videoId?: string
}

export interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text?: SubscriberCountText
  style?: Style
}

export enum Style {
  Default = 'DEFAULT'
}

export interface ContinuationItemRenderer {
  trigger?: string
  continuationEndpoint?: ContinuationEndpoint
}

export interface ContinuationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  continuationCommand?: ContinuationCommand
}

export interface ContinuationCommand {
  token?: string
  request?: string
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
  browseEndpoint?: PurpleBrowseEndpoint
}

export interface PurpleBrowseEndpoint {
  browseId?: ID
  params?: string
  canonicalBaseUrl?: CanonicalBaseURL
}

export enum ID {
  UCY0XL8V6NzzFcwzHCGB8OrQ = 'UCY0xL8V6NzzFcwzHCgB8orQ'
}

export enum CanonicalBaseURL {
  CDappUniversity = '/c/DappUniversity'
}

export interface Header {
  c4TabbedHeaderRenderer?: C4TabbedHeaderRenderer
}

export interface C4TabbedHeaderRenderer {
  channelId?: ID
  title?: string
  navigationEndpoint?: C4TabbedHeaderRendererNavigationEndpoint
  avatar?: Avatar
  banner?: Avatar
  subscribeButton?: SubscribeButton
  visitTracking?: VisitTracking
  subscriberCountText?: SubscriberCountText
  tvBanner?: Avatar
  mobileBanner?: Avatar
  trackingParams?: string
}

export interface C4TabbedHeaderRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: NavigationEndpointBrowseEndpoint
}

export interface NavigationEndpointBrowseEndpoint {
  browseId?: ID
  canonicalBaseUrl?: CanonicalBaseURL
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

export interface OnSubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  subscribeEndpoint?: SubscribeEndpoint
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
  actions?: SignalServiceEndpointAction[]
}

export interface SignalServiceEndpointAction {
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
  serviceEndpoint?: ButtonRendererServiceEndpoint
}

export interface ButtonRendererServiceEndpoint {
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
  endpoint?: TopbarLogoRendererEndpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface TopbarLogoRendererEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: FluffyBrowseEndpoint
}

export interface FluffyBrowseEndpoint {
  browseId?: string
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
