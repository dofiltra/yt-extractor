export interface IYtSearchResponse {
  page?: string
  rootVe?: string
  response?: Response
  xsrf_token?: string
  url?: string
  timing?: Timing
}

export interface Response {
  responseContext?: ResponseContext
  estimatedResults?: string
  contents?: Contents
  trackingParams?: string
  topbar?: Topbar
}

export interface Contents {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: SectionListRendererContent[]
  continuations?: Continuation[]
  trackingParams?: string
  subMenu?: SubMenu
  hideBottomSeparator?: boolean
  targetId?: string
}

export interface SectionListRendererContent {
  itemSectionRenderer?: ItemSectionRenderer
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface ContinuationItemRenderer {
  trigger?: string
  continuationEndpoint?: ContinuationEndpoint
}

export interface ContinuationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  continuationCommand?: ContinuationCommand
}

export interface ContinuationEndpointCommandMetadata {
  webCommandMetadata?: PurpleWebCommandMetadata
}

export interface PurpleWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: PurpleAPIURL
}

export enum PurpleAPIURL {
  YoutubeiV1BrowseEditPlaylist = '/youtubei/v1/browse/edit_playlist',
  YoutubeiV1Search = '/youtubei/v1/search'
}

export interface ContinuationCommand {
  token?: string
  request?: string
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
  separatorDetails?: SeparatorDetails
}

export interface ItemSectionRendererContent {
  promotedSparklesTextSearchRenderer?: PromotedSparklesTextSearchRenderer
  compactVideoRenderer?: CompactVideoRenderer
  compactPlaylistRenderer?: CompactPlaylistRenderer
  compactRadioRenderer?: CompactRadioRenderer
}

export interface CompactPlaylistRenderer {
  playlistId?: string
  thumbnail?: ChannelThumbnailElement
  title?: TooltipTextClass
  shortBylineText?: CompactPlaylistRendererLongBylineText
  videoCountText?: TooltipTextClass
  navigationEndpoint?: Endpoint
  videoCountShortText?: TooltipTextClass
  trackingParams?: string
  sidebarThumbnails?: ChannelThumbnailElement[]
  thumbnailText?: ThumbnailText
  shareUrl?: string
  thumbnailRenderer?: ThumbnailRenderer
  longBylineText?: CompactPlaylistRendererLongBylineText
}

export interface CompactPlaylistRendererLongBylineText {
  runs?: PurpleRun[]
}

export interface PurpleRun {
  text?: string
  navigationEndpoint?: Endpoint
}

export interface Endpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: EndpointBrowseEndpoint
}

export interface EndpointBrowseEndpoint {
  browseId?: string
}

export interface EndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  url?: string
  webPageType?: WebPageType
  rootVe?: number
  apiUrl?: FluffyAPIURL
}

export enum FluffyAPIURL {
  YoutubeiV1Browse = '/youtubei/v1/browse'
}

export enum WebPageType {
  WebPageTypeBrowse = 'WEB_PAGE_TYPE_BROWSE',
  WebPageTypeChannel = 'WEB_PAGE_TYPE_CHANNEL',
  WebPageTypePlaylist = 'WEB_PAGE_TYPE_PLAYLIST',
  WebPageTypeSearch = 'WEB_PAGE_TYPE_SEARCH',
  WebPageTypeUnknown = 'WEB_PAGE_TYPE_UNKNOWN',
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface ChannelThumbnailElement {
  thumbnails?: ThumbnailThumbnail[]
}

export interface ThumbnailThumbnail {
  url?: string
  width?: number
  height?: number
}

export interface ThumbnailRenderer {
  playlistVideoThumbnailRenderer?: PlaylistVideoThumbnailRenderer
}

export interface PlaylistVideoThumbnailRenderer {
  thumbnail?: ChannelThumbnailElement
}

export interface ThumbnailText {
  runs?: ThumbnailTextRun[]
}

export interface ThumbnailTextRun {
  text?: string
  bold?: boolean
}

export interface TooltipTextClass {
  runs?: TitleRun[]
}

export interface TitleRun {
  text?: string
}

export interface CompactRadioRenderer {
  playlistId?: string
  thumbnail?: CompactRadioRendererThumbnail
  title?: TooltipTextClass
  navigationEndpoint?: NavigationEndpoint
  videoCountText?: TooltipTextClass
  secondaryNavigationEndpoint?: NavigationEndpoint
  shortBylineText?: TooltipTextClass
  longBylineText?: TooltipTextClass
  trackingParams?: string
  thumbnailText?: ThumbnailText
  videoCountShortText?: TooltipTextClass
  likeButton?: LikeButton
  shareUrl?: string
  thumbnailOverlays?: CompactRadioRendererThumbnailOverlay[]
}

export interface LikeButton {
  likeButtonRenderer?: LikeButtonRenderer
}

export interface LikeButtonRenderer {
  target?: Target
  likeStatus?: string
  trackingParams?: string
  likesAllowed?: boolean
}

export interface Target {
  playlistId?: string
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  watchEndpoint?: SecondaryNavigationEndpointWatchEndpoint
}

export interface SecondaryNavigationEndpointWatchEndpoint {
  videoId?: string
  playlistId?: string
  params?: string
  continuePlayback?: boolean
  loggingContext?: LoggingContext
}

export interface LoggingContext {
  vssLoggingContext?: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData?: string
}

export interface CompactRadioRendererThumbnail {
  thumbnails?: ThumbnailThumbnail[]
  sampledThumbnailColor?: SampledThumbnailColor
}

export interface SampledThumbnailColor {
  red?: number
  green?: number
  blue?: number
}

export interface CompactRadioRendererThumbnailOverlay {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer
}

export interface ThumbnailOverlayBottomPanelRenderer {
  icon?: Icon
}

export interface Icon {
  iconType?: string
}

export interface CompactVideoRenderer {
  videoId?: string
  thumbnail?: ChannelThumbnailElement
  title?: LengthText
  longBylineText?: CompactVideoRendererLongBylineText
  publishedTimeText?: TooltipTextClass
  viewCountText?: TooltipTextClass
  lengthText?: LengthText
  navigationEndpoint?: CompactVideoRendererNavigationEndpoint
  shortBylineText?: CompactVideoRendererLongBylineText
  channelThumbnail?: ChannelThumbnailElement
  ownerBadges?: OwnerBadge[]
  trackingParams?: string
  shortViewCountText?: LengthText
  menu?: Menu
  thumbnailOverlays?: CompactVideoRendererThumbnailOverlay[]
  accessibility?: Accessibility
  badges?: Badge[]
  bottomStandaloneBadge?: BottomStandaloneBadge
}

export interface Accessibility {
  accessibilityData?: AccessibilityData
}

export interface AccessibilityData {
  label?: string
}

export interface Badge {
  metadataBadgeRenderer?: BadgeMetadataBadgeRenderer
}

export interface BadgeMetadataBadgeRenderer {
  style?: string
  label?: string
  trackingParams?: string
}

export interface BottomStandaloneBadge {
  standaloneCollectionBadgeRenderer?: StandaloneCollectionBadgeRenderer
}

export interface StandaloneCollectionBadgeRenderer {
  iconText?: string
  style?: StyleClass
  trackingParams?: string
}

export interface StyleClass {
  badgeStyle?: string
}

export interface LengthText {
  runs?: TitleRun[]
  accessibility?: Accessibility
}

export interface CompactVideoRendererLongBylineText {
  runs?: FluffyRun[]
}

export interface FluffyRun {
  text?: string
  navigationEndpoint?: RunNavigationEndpoint
}

export interface RunNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: PurpleBrowseEndpoint
}

export interface PurpleBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface Menu {
  menuRenderer?: MenuMenuRenderer
}

export interface MenuMenuRenderer {
  items?: PurpleItem[]
  trackingParams?: string
  accessibility?: Accessibility
}

export interface PurpleItem {
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

export interface MenuServiceItemRenderer {
  text?: TooltipTextClass
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  playlistEditEndpoint?: PlaylistEditEndpoint
}

export interface PlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: ActionElement[]
}

export interface ActionElement {
  addedVideoId?: string
  action?: ActionEnum
}

export enum ActionEnum {
  ActionAddVideo = 'ACTION_ADD_VIDEO'
}

export enum PlaylistID {
  Wl = 'WL'
}

export interface CompactVideoRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  watchEndpoint?: PurpleWatchEndpoint
}

export interface PurpleWatchEndpoint {
  videoId?: string
}

export interface OwnerBadge {
  metadataBadgeRenderer?: OwnerBadgeMetadataBadgeRenderer
}

export interface OwnerBadgeMetadataBadgeRenderer {
  icon?: Icon
  style?: string
  tooltip?: string
  trackingParams?: string
}

export interface CompactVideoRendererThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text?: LengthText
  style?: StyleEnum
}

export enum StyleEnum {
  Default = 'DEFAULT'
}

export interface PromotedSparklesTextSearchRenderer {
  content?: PromotedSparklesTextSearchRendererContent
  clickLocationTargets?: ClickLocationTarget[]
  trackingParams?: string
}

export interface ClickLocationTarget {
  location?: string
  code?: number
  behaviorType?: BehaviorType
}

export enum BehaviorType {
  PromotedSparklesClickBehaviorTypeNoop = 'PROMOTED_SPARKLES_CLICK_BEHAVIOR_TYPE_NOOP',
  PromotedSparklesClickBehaviorTypeOpenAd = 'PROMOTED_SPARKLES_CLICK_BEHAVIOR_TYPE_OPEN_AD'
}

export interface PromotedSparklesTextSearchRendererContent {
  title?: TooltipTextClass
  descriptionText?: TooltipTextClass
  websiteText?: WebsiteText
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint
  impressionEndpoints?: ImpressionEndpoint[]
  closeButton?: CloseButton
  clickTargetDelayMs?: string
  borderInfo?: BorderInfo
  ctaButton?: CtaButton
  favicon?: ChannelThumbnailElement
}

export interface BorderInfo {
  left?: Bottom
  right?: Bottom
  top?: Bottom
  bottom?: Bottom
}

export interface Bottom {
  flat?: number
  percentage?: number
}

export interface CloseButton {
  menuRenderer?: CloseButtonMenuRenderer
}

export interface CloseButtonMenuRenderer {
  items?: FluffyItem[]
  trackingParams?: string
  accessibility?: Accessibility
}

export interface FluffyItem {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer
}

export interface MenuNavigationItemRenderer {
  text?: TooltipTextClass
  icon?: Icon
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint
  trackingParams?: string
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams?: string
  adChoicesDialogEndpoint?: AdChoicesDialogEndpoint
  commandMetadata?: EndpointCommandMetadata
  urlEndpoint?: URLEndpoint
}

export interface AdChoicesDialogEndpoint {
  dialog?: Dialog
}

export interface Dialog {
  fancyDismissibleDialogRenderer?: FancyDismissibleDialogRenderer
}

export interface FancyDismissibleDialogRenderer {
  dialogMessage?: TooltipTextClass
  title?: TooltipTextClass
  confirmLabel?: TooltipTextClass
  trackingParams?: string
}

export interface URLEndpoint {
  url?: string
  target?: string
}

export interface CtaButton {
  buttonRenderer?: ButtonRenderer
}

export interface ButtonRenderer {
  style?: string
  text?: TooltipTextClass
  icon?: Icon
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint
  trackingParams?: string
  iconPosition?: string
}

export interface ImpressionEndpoint {
  clickTrackingParams?: string
  loggingUrls?: LoggingURL[]
  pingingEndpoint?: PingingEndpoint
}

export interface LoggingURL {
  baseUrl?: string
}

export interface PingingEndpoint {
  hack?: boolean
}

export interface WebsiteText {
  runs?: WebsiteTextRun[]
}

export interface WebsiteTextRun {
  text?: string
  textColor?: number
}

export interface SeparatorDetails {
  hasBottomSeparator?: boolean
}

export interface Continuation {
  reloadContinuationData?: ReloadContinuationData
}

export interface ReloadContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface SubMenu {
  searchSubMenuRenderer?: SearchSubMenuRenderer
}

export interface SearchSubMenuRenderer {
  title?: TooltipTextClass
  groups?: Group[]
  trackingParams?: string
}

export interface Group {
  searchFilterGroupRenderer?: SearchFilterGroupRenderer
}

export interface SearchFilterGroupRenderer {
  title?: LabelClass
  filters?: Filter[]
  trackingParams?: string
}

export interface Filter {
  searchFilterRenderer?: SearchFilterRenderer
}

export interface SearchFilterRenderer {
  label?: LabelClass
  status?: string
  navigationEndpoint?: SearchFilterRendererNavigationEndpoint
  tooltip?: string
  trackingParams?: string
}

export interface LabelClass {
  simpleText?: string
}

export interface SearchFilterRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  searchEndpoint?: NavigationEndpointSearchEndpoint
}

export interface NavigationEndpointSearchEndpoint {
  query?: string
  params?: string
}

export interface ResponseContext {
  serviceTrackingParams?: ServiceTrackingParam[]
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
  searchEndpoint?: SearchCommandSearchEndpoint
}

export interface SearchCommandSearchEndpoint {
  params?: string
  hack?: boolean
}

export interface TopbarLogo {
  topbarLogoRenderer?: TopbarLogoRenderer
}

export interface TopbarLogoRenderer {
  iconImage?: Icon
  tooltipText?: TooltipTextClass
  endpoint?: Endpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface Timing {
  info?: Info
}

export interface Info {
  st?: number
}
