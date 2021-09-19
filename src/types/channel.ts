export interface IYtChannelResponse {
  responseContext?: ResponseContext
  trackingParams?: string
  contents?: Contents
  header?: Header
  metadata?: Metadata
  topbar?: Topbar
  microformat?: Microformat
  onResponseReceivedActions?: OnResponseReceivedAction[]
  frameworkUpdates?: FrameworkUpdates
}

export interface Contents {
  twoColumnBrowseResultsRenderer?: TwoColumnBrowseResultsRenderer
}

export interface TwoColumnBrowseResultsRenderer {
  tabs?: Tab[]
}

export interface Tab {
  tabRenderer?: TabRenderer
  expandableTabRenderer?: ExpandableTabRenderer
}

export interface ExpandableTabRenderer {
  endpoint?: NavigationEndpointClass
  title?: string
  selected?: boolean
}

export interface NavigationEndpointClass {
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
  WebPageTypeSearch = 'WEB_PAGE_TYPE_SEARCH',
  WebPageTypeUnknown = 'WEB_PAGE_TYPE_UNKNOWN',
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface TabRenderer {
  endpoint?: NavigationEndpointClass
  title?: string
  selected?: boolean
  content?: TabRendererContent
  trackingParams?: string
}

export interface TabRendererContent {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: SectionListRendererContent[]
  trackingParams?: string
  targetId?: string
}

export interface SectionListRendererContent {
  itemSectionRenderer?: ItemSectionRenderer
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
}

export interface ItemSectionRendererContent {
  shelfRenderer?: ShelfRenderer
}

export interface ShelfRenderer {
  title?: ShelfRendererTitle
  endpoint?: NavigationEndpointClass
  content?: ShelfRendererContent
  trackingParams?: string
  playAllButton?: PlayAllButton
}

export interface ShelfRendererContent {
  horizontalListRenderer?: HorizontalListRenderer
}

export interface HorizontalListRenderer {
  items?: HorizontalListRendererItem[]
  trackingParams?: string
  visibleItemCount?: number
  nextButton?: A11YSkipNavigationButton
  previousButton?: A11YSkipNavigationButton
}

export interface HorizontalListRendererItem {
  gridVideoRenderer?: GridVideoRenderer
}

export interface GridVideoRenderer {
  videoId?: string
  thumbnail?: BannerClass
  title?: ShortViewCountText
  publishedTimeText?: TextClass
  viewCountText?: TextClass
  navigationEndpoint?: GridVideoRendererNavigationEndpoint
  trackingParams?: string
  shortViewCountText?: ShortViewCountText
  menu?: Menu
  thumbnailOverlays?: ThumbnailOverlay[]
  richThumbnail?: RichThumbnail
}

export interface Menu {
  menuRenderer?: MenuMenuRenderer
}

export interface MenuMenuRenderer {
  items?: MenuRendererItem[]
  trackingParams?: string
  accessibility?: SubscribeAccessibility
}

export interface SubscribeAccessibility {
  accessibilityData?: Accessibility
}

export interface Accessibility {
  label?: string
}

export interface MenuRendererItem {
  menuServiceItemRenderer?: PurpleMenuServiceItemRenderer
}

export interface PurpleMenuServiceItemRenderer {
  text?: ButtonText
  icon?: IconImageClass
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
  hasSeparator?: boolean
}

export interface IconImageClass {
  iconType?: string
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint
  playlistEditEndpoint?: UntoggledServiceEndpointPlaylistEditEndpoint
  addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
}

export interface AddToPlaylistServiceEndpoint {
  videoId?: string
}

export interface UntoggledServiceEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: string
}

export interface UntoggledServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: PurpleAction[]
}

export interface PurpleAction {
  addedVideoId?: string
  action?: AmbitiousAction
}

export enum AmbitiousAction {
  ActionAddVideo = 'ACTION_ADD_VIDEO'
}

export enum PlaylistID {
  Wl = 'WL'
}

export interface UntoggledServiceEndpointSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: FluffyAction[]
}

export interface FluffyAction {
  clickTrackingParams?: string
  addToPlaylistCommand?: AddToPlaylistCommand
}

export interface AddToPlaylistCommand {
  openMiniplayer?: boolean
  videoId?: string
  listType?: ListType
  onCreateListCommand?: OnCreateListCommand
  videoIds?: string[]
}

export enum ListType {
  PlaylistEditListTypeQueue = 'PLAYLIST_EDIT_LIST_TYPE_QUEUE'
}

export interface OnCreateListCommand {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint
}

export interface CreatePlaylistServiceEndpoint {
  videoIds?: string[]
  params?: Params
}

export enum Params {
  CAQ3D = 'CAQ%3D'
}

export enum SignalEnum {
  ClientSignal = 'CLIENT_SIGNAL'
}

export interface ButtonText {
  runs?: ButtonTextRun[]
}

export interface ButtonTextRun {
  text?: string
}

export interface GridVideoRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  watchEndpoint?: PurpleWatchEndpoint
}

export interface PurpleWatchEndpoint {
  videoId?: string
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

export interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig
}

export interface Html5PlaybackOnesieConfig {
  commonConfig?: CommonConfigElement
}

export interface CommonConfigElement {
  url?: string
}

export interface TextClass {
  simpleText?: string
}

export interface RichThumbnail {
  movingThumbnailRenderer?: MovingThumbnailRenderer
}

export interface MovingThumbnailRenderer {
  movingThumbnailDetails?: MovingThumbnailDetails
  enableHoveredLogging?: boolean
  enableOverlay?: boolean
}

export interface MovingThumbnailDetails {
  thumbnails?: MovingThumbnailDetailsThumbnail[]
  logAsMovingThumbnail?: boolean
}

export interface MovingThumbnailDetailsThumbnail {
  url?: string
  width?: number
  height?: number
}

export interface ShortViewCountText {
  accessibility?: SubscribeAccessibility
  simpleText?: string
}

export interface BannerClass {
  thumbnails?: MovingThumbnailDetailsThumbnail[]
}

export interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer
}

export interface ThumbnailOverlayNowPlayingRenderer {
  text?: ButtonText
}

export interface ThumbnailOverlayResumePlaybackRenderer {
  percentDurationWatched?: number
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text?: ShortViewCountText
  style?: ThumbnailOverlayTimeStatusRendererStyle
}

export enum ThumbnailOverlayTimeStatusRendererStyle {
  Default = 'DEFAULT'
}

export interface ThumbnailOverlayToggleButtonRenderer {
  isToggled?: boolean
  untoggledIcon?: IconImageClass
  toggledIcon?: IconImageClass
  untoggledTooltip?: UntoggledTooltip
  toggledTooltip?: ToggledTooltip
  untoggledServiceEndpoint?: ServiceEndpoint
  toggledServiceEndpoint?: ToggledServiceEndpoint
  untoggledAccessibility?: SubscribeAccessibility
  toggledAccessibility?: SubscribeAccessibility
  trackingParams?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  playlistEditEndpoint?: ToggledServiceEndpointPlaylistEditEndpoint
}

export interface ToggledServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: TentacledAction[]
}

export interface TentacledAction {
  action?: CunningAction
  removedVideoId?: string
}

export enum CunningAction {
  ActionRemoveVideoByVideoID = 'ACTION_REMOVE_VIDEO_BY_VIDEO_ID'
}

export enum ToggledTooltip {
  ДобавленоВПлейлистПосмотретьПозже = 'Добавлено в плейлист "Посмотреть позже"'
}

export enum UntoggledTooltip {
  ДобавитьВОчередь = 'Добавить в очередь',
  СмотретьПозже = 'Смотреть позже'
}

export interface VoiceSearchDialogRenderer {
  placeholderHeader?: ButtonText
  promptHeader?: ButtonText
  exampleQuery1?: ButtonText
  exampleQuery2?: ButtonText
  promptMicrophoneLabel?: ButtonText
  loadingHeader?: ButtonText
  connectionErrorHeader?: ButtonText
  connectionErrorMicrophoneLabel?: ButtonText
  permissionsHeader?: ButtonText
  permissionsSubtext?: ButtonText
  disabledHeader?: ButtonText
  disabledSubtext?: ButtonText
  exitButton?: A11YSkipNavigationButton
  trackingParams?: string
  microphoneOffPromptHeader?: ButtonText
}

export interface PurplePopup {
  voiceSearchDialogRenderer?: VoiceSearchDialogRenderer
}

export interface PurpleOpenPopupAction {
  popup?: PurplePopup
  popupType?: string
}

export interface IndigoAction {
  clickTrackingParams?: string
  openPopupAction?: PurpleOpenPopupAction
}

export interface PurpleSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: IndigoAction[]
}

export interface ButtonRendererServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
  signalServiceEndpoint?: PurpleSignalServiceEndpoint
}

export interface A11YSkipNavigationButtonButtonRenderer {
  style?: ButtonRendererStyle
  size?: Size
  isDisabled?: boolean
  icon?: IconImageClass
  accessibility?: Accessibility
  trackingParams?: string
  accessibilityData?: SubscribeAccessibility
  text?: ButtonText
  serviceEndpoint?: ButtonRendererServiceEndpoint
  command?: ButtonRendererCommand
  tooltip?: string
}

export interface A11YSkipNavigationButton {
  buttonRenderer?: A11YSkipNavigationButtonButtonRenderer
}

export interface SubscribeEndpoint {
  channelIds?: string[]
  params?: string
}

export interface ButtonRendererCommand {
  clickTrackingParams?: string
  commandMetadata?: CommandCommandMetadata
  signalServiceEndpoint?: CommandSignalServiceEndpoint
}

export interface CommandCommandMetadata {
  webCommandMetadata?: TentacledWebCommandMetadata
}

export interface TentacledWebCommandMetadata {
  sendPost?: boolean
}

export interface CommandSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: StickyAction[]
}

export interface StickyAction {
  clickTrackingParams?: string
  signalAction?: Signal
}

export interface Signal {
  signal?: string
}

export enum Size {
  SizeDefault = 'SIZE_DEFAULT'
}

export enum ButtonRendererStyle {
  StyleBlueText = 'STYLE_BLUE_TEXT',
  StyleDefault = 'STYLE_DEFAULT',
  StyleText = 'STYLE_TEXT'
}

export interface PlayAllButton {
  buttonRenderer?: PlayAllButtonButtonRenderer
}

export interface PlayAllButtonButtonRenderer {
  style?: ButtonRendererStyle
  size?: Size
  isDisabled?: boolean
  text?: ButtonText
  icon?: IconImageClass
  navigationEndpoint?: ButtonRendererNavigationEndpoint
  trackingParams?: string
}

export interface ButtonRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  watchEndpoint?: FluffyWatchEndpoint
}

export interface FluffyWatchEndpoint {
  videoId?: string
  playlistId?: string
  loggingContext?: LoggingContext
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

export interface LoggingContext {
  vssLoggingContext?: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData?: string
}

export interface ShelfRendererTitle {
  runs?: PurpleRun[]
}

export interface PurpleRun {
  text?: string
  navigationEndpoint?: NavigationEndpointClass
}

export interface FrameworkUpdates {
  entityBatchUpdate?: EntityBatchUpdate
}

export interface EntityBatchUpdate {
  mutations?: Mutation[]
  timestamp?: Timestamp
}

export interface Mutation {
  entityKey?: string
  type?: string
  payload?: Payload
}

export interface Payload {
  subscriptionStateEntity?: SubscriptionStateEntity
}

export interface SubscriptionStateEntity {
  key?: string
  subscribed?: boolean
}

export interface Timestamp {
  seconds?: string
  nanos?: number
}

export interface Header {
  c4TabbedHeaderRenderer?: C4TabbedHeaderRenderer
}

export interface C4TabbedHeaderRenderer {
  channelId?: string
  title?: string
  navigationEndpoint?: C4TabbedHeaderRendererNavigationEndpoint
  avatar?: BannerClass
  banner?: BannerClass
  headerLinks?: HeaderLinks
  subscribeButton?: SubscribeButton
  tvBanner?: BannerClass
  mobileBanner?: BannerClass
  trackingParams?: string
}

export interface HeaderLinks {
  channelHeaderLinksRenderer?: ChannelHeaderLinksRenderer
}

export interface ChannelHeaderLinksRenderer {
  primaryLinks?: PrimaryLink[]
}

export interface PrimaryLink {
  navigationEndpoint?: PrimaryLinkNavigationEndpoint
  icon?: PrimaryLinkIcon
  title?: TextClass
}

export interface PrimaryLinkIcon {
  thumbnails?: CommonConfigElement[]
}

export interface PrimaryLinkNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  urlEndpoint?: PurpleURLEndpoint
}

export interface PurpleURLEndpoint {
  url?: string
  target?: string
  nofollow?: boolean
}

export interface C4TabbedHeaderRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: FluffyBrowseEndpoint
}

export interface FluffyBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: ButtonText
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: string
  showPreferences?: boolean
  subscribedButtonText?: ButtonText
  unsubscribedButtonText?: ButtonText
  trackingParams?: string
  unsubscribeButtonText?: ButtonText
  subscribeAccessibility?: SubscribeAccessibility
  unsubscribeAccessibility?: SubscribeAccessibility
  notificationPreferenceButton?: NotificationPreferenceButton
  subscribedEntityKey?: string
  onSubscribeEndpoints?: OnSubscribeEndpoint[]
  onUnsubscribeEndpoints?: OnUnsubscribeEndpoint[]
}

export interface NotificationPreferenceButton {
  subscriptionNotificationToggleButtonRenderer?: SubscriptionNotificationToggleButtonRenderer
}

export interface SubscriptionNotificationToggleButtonRenderer {
  states?: State[]
  currentStateId?: number
  trackingParams?: string
  command?: SubscriptionNotificationToggleButtonRendererCommand
  targetId?: string
}

export interface SubscriptionNotificationToggleButtonRendererCommand {
  clickTrackingParams?: string
  commandExecutorCommand?: CommandExecutorCommand
}

export interface CommandExecutorCommand {
  commands?: CommandElement[]
}

export interface CommandElement {
  clickTrackingParams?: string
  openPopupAction?: CommandOpenPopupAction
}

export interface CommandOpenPopupAction {
  popup?: FluffyPopup
  popupType?: string
}

export interface FluffyPopup {
  menuPopupRenderer?: MenuPopupRenderer
}

export interface MenuPopupRenderer {
  items?: MenuPopupRendererItem[]
}

export interface MenuPopupRendererItem {
  menuServiceItemRenderer?: FluffyMenuServiceItemRenderer
}

export interface FluffyMenuServiceItemRenderer {
  text?: TextClass
  icon?: IconImageClass
  serviceEndpoint?: PurpleServiceEndpoint
  trackingParams?: string
  isSelected?: boolean
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  modifyChannelNotificationPreferenceEndpoint?: ModifyChannelNotificationPreferenceEndpoint
}

export interface ModifyChannelNotificationPreferenceEndpoint {
  params?: string
}

export interface State {
  stateId?: number
  nextStateId?: number
  state?: A11YSkipNavigationButton
}

export interface OnSubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  subscribeEndpoint?: SubscribeEndpoint
}

export interface OnUnsubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: CommandCommandMetadata
  signalServiceEndpoint?: OnUnsubscribeEndpointSignalServiceEndpoint
}

export interface OnUnsubscribeEndpointSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: IndecentAction[]
}

export interface IndecentAction {
  clickTrackingParams?: string
  openPopupAction?: FluffyOpenPopupAction
}

export interface FluffyOpenPopupAction {
  popup?: TentacledPopup
  popupType?: string
}

export interface TentacledPopup {
  confirmDialogRenderer?: ConfirmDialogRenderer
}

export interface ConfirmDialogRenderer {
  trackingParams?: string
  dialogMessages?: ButtonText[]
  confirmButton?: A11YSkipNavigationButton
  cancelButton?: A11YSkipNavigationButton
  primaryIsCancel?: boolean
}

export interface Metadata {
  channelMetadataRenderer?: ChannelMetadataRenderer
}

export interface ChannelMetadataRenderer {
  title?: string
  description?: string
  rssUrl?: string
  externalId?: string
  keywords?: string
  ownerUrls?: string[]
  avatar?: BannerClass
  channelUrl?: string
  isFamilySafe?: boolean
  availableCountryCodes?: string[]
  androidDeepLink?: string
  androidAppindexingLink?: string
  iosAppindexingLink?: string
  tabPath?: string
  vanityChannelUrl?: string
}

export interface Microformat {
  microformatDataRenderer?: MicroformatDataRenderer
}

export interface MicroformatDataRenderer {
  urlCanonical?: string
  title?: string
  description?: string
  thumbnail?: BannerClass
  siteName?: string
  appName?: string
  androidPackage?: string
  iosAppStoreId?: string
  iosAppArguments?: string
  ogType?: string
  urlApplinksWeb?: string
  urlApplinksIos?: string
  urlApplinksAndroid?: string
  urlTwitterIos?: string
  urlTwitterAndroid?: string
  twitterCardType?: string
  twitterSiteHandle?: string
  schemaDotOrgType?: string
  noindex?: boolean
  unlisted?: boolean
  familySafe?: boolean
  tags?: string[]
  availableCountries?: string[]
  linkAlternates?: LinkAlternate[]
}

export interface LinkAlternate {
  hrefUrl?: string
}

export interface OnResponseReceivedAction {
  clickTrackingParams?: string
  resetChannelUnreadCountCommand?: ResetChannelUnreadCountCommand
}

export interface ResetChannelUnreadCountCommand {
  channelId?: string
}

export interface ResponseContext {
  maxAgeSeconds?: number
  serviceTrackingParams?: ServiceTrackingParam[]
  mainAppWebResponseContext?: MainAppWebResponseContext
  webResponseContextExtensionData?: WebResponseContextExtensionData
}

export interface MainAppWebResponseContext {
  datasyncId?: string
  loggedOut?: boolean
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
  hasDecorated?: boolean
}

export interface Topbar {
  desktopTopbarRenderer?: DesktopTopbarRenderer
}

export interface DesktopTopbarRenderer {
  logo?: Logo
  searchbox?: Searchbox
  trackingParams?: string
  countryCode?: string
  topbarButtons?: TopbarButton[]
  hotkeyDialog?: HotkeyDialog
  backButton?: Button
  forwardButton?: Button
  a11ySkipNavigationButton?: A11YSkipNavigationButton
  voiceSearchButton?: A11YSkipNavigationButton
}

export interface Button {
  buttonRenderer?: BackButtonButtonRenderer
}

export interface BackButtonButtonRenderer {
  trackingParams?: string
  command?: ButtonRendererCommand
}

export interface HotkeyDialog {
  hotkeyDialogRenderer?: HotkeyDialogRenderer
}

export interface HotkeyDialogRenderer {
  title?: ButtonText
  sections?: HotkeyDialogRendererSection[]
  dismissButton?: A11YSkipNavigationButton
  trackingParams?: string
}

export interface HotkeyDialogRendererSection {
  hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
}

export interface HotkeyDialogSectionRenderer {
  title?: ButtonText
  options?: Option[]
}

export interface Option {
  hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
}

export interface HotkeyDialogSectionOptionRenderer {
  label?: ButtonText
  hotkey?: string
  hotkeyAccessibilityLabel?: SubscribeAccessibility
}

export interface Logo {
  topbarLogoRenderer?: TopbarLogoRenderer
}

export interface TopbarLogoRenderer {
  iconImage?: IconImageClass
  tooltipText?: ButtonText
  endpoint?: TopbarLogoRendererEndpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface TopbarLogoRendererEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  browseEndpoint?: TentacledBrowseEndpoint
}

export interface TentacledBrowseEndpoint {
  browseId?: string
}

export interface Searchbox {
  fusionSearchboxRenderer?: FusionSearchboxRenderer
}

export interface FusionSearchboxRenderer {
  icon?: IconImageClass
  placeholderText?: ButtonText
  config?: Config
  trackingParams?: string
  searchEndpoint?: FusionSearchboxRendererSearchEndpoint
  clearButton?: A11YSkipNavigationButton
}

export interface Config {
  webSearchboxConfig?: WebSearchboxConfig
}

export interface WebSearchboxConfig {
  requestLanguage?: string
  requestDomain?: string
  hasOnscreenKeyboard?: boolean
  focusSearchbox?: boolean
}

export interface FusionSearchboxRendererSearchEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  searchEndpoint?: SearchEndpointSearchEndpoint
}

export interface SearchEndpointSearchEndpoint {
  query?: string
}

export interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
  notificationTopbarButtonRenderer?: NotificationTopbarButtonRenderer
}

export interface NotificationTopbarButtonRenderer {
  icon?: IconImageClass
  menuRequest?: MenuRequest
  style?: string
  trackingParams?: string
  accessibility?: SubscribeAccessibility
  tooltip?: string
  updateUnseenCountEndpoint?: UpdateUnseenCountEndpoint
  notificationCount?: number
  handlerDatas?: string[]
}

export interface MenuRequest {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  signalServiceEndpoint?: MenuRequestSignalServiceEndpoint
}

export interface MenuRequestSignalServiceEndpoint {
  signal?: string
  actions?: HilariousAction[]
}

export interface HilariousAction {
  clickTrackingParams?: string
  openPopupAction?: TentacledOpenPopupAction
}

export interface TentacledOpenPopupAction {
  popup?: StickyPopup
  popupType?: string
  beReused?: boolean
}

export interface StickyPopup {
  multiPageMenuRenderer?: PopupMultiPageMenuRenderer
}

export interface PopupMultiPageMenuRenderer {
  trackingParams?: string
  style?: string
  showLoadingSpinner?: boolean
}

export interface UpdateUnseenCountEndpoint {
  clickTrackingParams?: string
  commandMetadata?: UntoggledServiceEndpointCommandMetadata
  signalServiceEndpoint?: Signal
}

export interface TopbarMenuButtonRenderer {
  icon?: IconImageClass
  menuRenderer?: TopbarMenuButtonRendererMenuRenderer
  trackingParams?: string
  accessibility?: SubscribeAccessibility
  tooltip?: string
  style?: ButtonRendererStyle
  targetId?: string
  avatar?: TopbarMenuButtonRendererAvatar
  menuRequest?: MenuRequest
}

export interface TopbarMenuButtonRendererAvatar {
  thumbnails?: MovingThumbnailDetailsThumbnail[]
  accessibility?: SubscribeAccessibility
}

export interface TopbarMenuButtonRendererMenuRenderer {
  multiPageMenuRenderer?: MenuRendererMultiPageMenuRenderer
}

export interface MenuRendererMultiPageMenuRenderer {
  sections?: MultiPageMenuRendererSection[]
  trackingParams?: string
  style?: string
}

export interface MultiPageMenuRendererSection {
  multiPageMenuSectionRenderer?: MultiPageMenuSectionRenderer
}

export interface MultiPageMenuSectionRenderer {
  items?: MultiPageMenuSectionRendererItem[]
  trackingParams?: string
}

export interface MultiPageMenuSectionRendererItem {
  compactLinkRenderer?: CompactLinkRenderer
}

export interface CompactLinkRenderer {
  icon?: IconImageClass
  title?: ButtonText
  navigationEndpoint?: CompactLinkRendererNavigationEndpoint
  trackingParams?: string
  style?: string
}

export interface CompactLinkRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: EndpointCommandMetadata
  uploadEndpoint?: UploadEndpoint
  signalNavigationEndpoint?: Signal
  urlEndpoint?: FluffyURLEndpoint
}

export interface UploadEndpoint {
  hack?: boolean
}

export interface FluffyURLEndpoint {
  url?: string
  target?: string
}
