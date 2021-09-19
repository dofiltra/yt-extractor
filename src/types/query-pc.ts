export interface IYQueryResponse {
  responseContext?: ResponseContext
  estimatedResults?: string
  trackingParams?: string
  refinements?: string[]
  contents?: Contents
  topbar?: Topbar
  frameworkUpdates?: FrameworkUpdates
}

export interface Contents {
  twoColumnSearchResultsRenderer?: TwoColumnSearchResultsRenderer
}

export interface TwoColumnSearchResultsRenderer {
  primaryContents?: PrimaryContents
}

export interface PrimaryContents {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: SectionListRendererContent[]
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
  YoutubeiV1AccountAccountMenu = '/youtubei/v1/account/account_menu',
  YoutubeiV1BrowseEditPlaylist = '/youtubei/v1/browse/edit_playlist',
  YoutubeiV1FlagGetForm = '/youtubei/v1/flag/get_form',
  YoutubeiV1NotificationGetNotificationMenu = '/youtubei/v1/notification/get_notification_menu',
  YoutubeiV1NotificationGetUnseenCount = '/youtubei/v1/notification/get_unseen_count',
  YoutubeiV1NotificationModifyChannelPreference = '/youtubei/v1/notification/modify_channel_preference',
  YoutubeiV1PlaylistCreate = '/youtubei/v1/playlist/create',
  YoutubeiV1PlaylistGetAddToPlaylist = '/youtubei/v1/playlist/get_add_to_playlist',
  YoutubeiV1Search = '/youtubei/v1/search',
  YoutubeiV1SubscriptionSubscribe = '/youtubei/v1/subscription/subscribe',
  YoutubeiV1SubscriptionUnsubscribe = '/youtubei/v1/subscription/unsubscribe'
}

export interface ContinuationCommand {
  token?: string
  request?: string
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
}

export interface ItemSectionRendererContent {
  videoRenderer?: ContentVideoRenderer
  channelRenderer?: ChannelRenderer
  shelfRenderer?: ShelfRenderer
  horizontalCardListRenderer?: HorizontalCardListRenderer
}

export interface ChannelRenderer {
  channelId?: string
  title?: PublishedTimeTextClass
  navigationEndpoint?: RunNavigationEndpoint
  thumbnail?: ChannelRendererThumbnail
  descriptionSnippet?: DescriptionSnippet
  shortBylineText?: Text
  videoCountText?: TextElement
  subscriptionButton?: SubscriptionButton
  subscriberCountText?: SubscriberCountTextClass
  subscribeButton?: SubscribeButton
  trackingParams?: string
  longBylineText?: Text
}

export interface DescriptionSnippet {
  runs?: DescriptionSnippetRun[]
}

export interface DescriptionSnippetRun {
  text?: string
  bold?: boolean
}

export interface Text {
  runs?: LongBylineTextRun[]
}

export interface LongBylineTextRun {
  text?: string
  navigationEndpoint?: RunNavigationEndpoint
}

export interface RunNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: NavigationEndpointBrowseEndpoint
}

export interface NavigationEndpointBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface NavigationEndpointCommandMetadata {
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
  WebPageTypeSearch = 'WEB_PAGE_TYPE_SEARCH',
  WebPageTypeUnknown = 'WEB_PAGE_TYPE_UNKNOWN',
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: TextElement
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: string
  showPreferences?: boolean
  subscribedButtonText?: TextElement
  unsubscribedButtonText?: TextElement
  trackingParams?: string
  unsubscribeButtonText?: TextElement
  subscribeAccessibility?: AccessibilityData
  unsubscribeAccessibility?: AccessibilityData
  notificationPreferenceButton?: NotificationPreferenceButton
  subscribedEntityKey?: string
  onSubscribeEndpoints?: OnSubscribeEndpoint[]
  onUnsubscribeEndpoints?: OnUnsubscribeEndpoint[]
}

export interface TextElement {
  runs?: TextRun[]
}

export interface TextRun {
  text?: string
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
  popup?: PurplePopup
  popupType?: string
}

export interface PurplePopup {
  menuPopupRenderer?: MenuPopupRenderer
}

export interface MenuPopupRenderer {
  items?: MenuPopupRendererItem[]
}

export interface MenuPopupRendererItem {
  menuServiceItemRenderer?: PurpleMenuServiceItemRenderer
}

export interface PurpleMenuServiceItemRenderer {
  text?: PublishedTimeTextClass
  icon?: IconImage
  serviceEndpoint?: PurpleServiceEndpoint
  trackingParams?: string
  isSelected?: boolean
}

export interface IconImage {
  iconType?: string
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  modifyChannelNotificationPreferenceEndpoint?: GetReportFormEndpointClass
}

export interface GetReportFormEndpointClass {
  params?: string
}

export interface PublishedTimeTextClass {
  simpleText?: string
}

export interface State {
  stateId?: number
  nextStateId?: number
  state?: VoiceSearchButton
}

export interface VoiceSearchButton {
  buttonRenderer?: VoiceSearchButtonButtonRenderer
}

export interface VoiceSearchButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  icon?: IconImage
  accessibility?: Accessibility
  trackingParams?: string
  accessibilityData?: AccessibilityData
  serviceEndpoint?: FluffyServiceEndpoint
  tooltip?: string
}

export interface Accessibility {
  label?: string
}

export interface AccessibilityData {
  accessibilityData?: Accessibility
}

export interface FluffyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: PurpleSignalServiceEndpoint
}

export interface OnUnsubscribeEndpointCommandMetadata {
  webCommandMetadata?: TentacledWebCommandMetadata
}

export interface TentacledWebCommandMetadata {
  sendPost?: boolean
}

export interface PurpleSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: PurpleAction[]
}

export interface PurpleAction {
  clickTrackingParams?: string
  openPopupAction?: PurpleOpenPopupAction
}

export interface PurpleOpenPopupAction {
  popup?: FluffyPopup
  popupType?: string
}

export interface FluffyPopup {
  voiceSearchDialogRenderer?: VoiceSearchDialogRenderer
}

export interface VoiceSearchDialogRenderer {
  placeholderHeader?: TextElement
  promptHeader?: TextElement
  exampleQuery1?: TextElement
  exampleQuery2?: TextElement
  promptMicrophoneLabel?: TextElement
  loadingHeader?: TextElement
  connectionErrorHeader?: TextElement
  connectionErrorMicrophoneLabel?: TextElement
  permissionsHeader?: TextElement
  permissionsSubtext?: TextElement
  disabledHeader?: TextElement
  disabledSubtext?: TextElement
  exitButton?: ClearButtonClass
  trackingParams?: string
  microphoneOffPromptHeader?: TextElement
}

export interface ClearButtonClass {
  buttonRenderer?: ClearButtonButtonRenderer
}

export interface ClearButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  icon?: IconImage
  trackingParams?: string
  accessibilityData?: AccessibilityData
}

export enum SignalEnum {
  ClientSignal = 'CLIENT_SIGNAL'
}

export interface OnSubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  subscribeEndpoint?: SubscribeEndpoint
}

export interface SubscribeEndpoint {
  channelIds?: string[]
  params?: string
}

export interface OnUnsubscribeEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: OnUnsubscribeEndpointSignalServiceEndpoint
}

export interface OnUnsubscribeEndpointSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: FluffyAction[]
}

export interface FluffyAction {
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
  dialogMessages?: TextElement[]
  confirmButton?: A11YSkipNavigationButtonClass
  cancelButton?: A11YSkipNavigationButtonClass
  primaryIsCancel?: boolean
}

export interface A11YSkipNavigationButtonClass {
  buttonRenderer?: A11YSkipNavigationButtonButtonRenderer
}

export interface A11YSkipNavigationButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  text?: TextElement
  accessibility?: Accessibility
  trackingParams?: string
  serviceEndpoint?: TentacledServiceEndpoint
  command?: ButtonRendererCommand
}

export interface ButtonRendererCommand {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: CommandSignalServiceEndpoint
}

export interface CommandSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: TentacledAction[]
}

export interface TentacledAction {
  clickTrackingParams?: string
  signalAction?: Signal
}

export interface Signal {
  signal?: string
}

export interface TentacledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
}

export interface SubscriberCountTextClass {
  accessibility?: AccessibilityData
  simpleText?: string
}

export interface SubscriptionButton {
  subscribed?: boolean
}

export interface ChannelRendererThumbnail {
  thumbnails?: ThumbnailElement[]
}

export interface ThumbnailElement {
  url?: string
  width?: number
  height?: number
}

export interface HorizontalCardListRenderer {
  cards?: Card[]
  trackingParams?: string
  header?: Header
  style?: HorizontalCardListRendererStyle
  previousButton?: DismissButtonClass
  nextButton?: DismissButtonClass
}

export interface Card {
  searchRefinementCardRenderer?: SearchRefinementCardRenderer
}

export interface SearchRefinementCardRenderer {
  thumbnail?: ChannelRendererThumbnail
  query?: TextElement
  searchEndpoint?: NavigationEndpointClass
  trackingParams?: string
}

export interface NavigationEndpointClass {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  searchEndpoint?: NavigationEndpointSearchEndpoint
}

export interface NavigationEndpointSearchEndpoint {
  query?: Query
  params?: string
}

export enum Query {
  Стартапы = 'стартапы',
  Школа = 'школа'
}

export interface Header {
  richListHeaderRenderer?: RichListHeaderRenderer
}

export interface RichListHeaderRenderer {
  title?: PublishedTimeTextClass
  trackingParams?: string
}

export interface DismissButtonClass {
  buttonRenderer?: DismissButtonButtonRenderer
}

export interface DismissButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  icon?: IconImage
  trackingParams?: string
  text?: TextElement
  accessibilityData?: AccessibilityData
}

export interface HorizontalCardListRendererStyle {
  type?: string
}

export interface ShelfRenderer {
  title?: PublishedTimeTextClass
  content?: ShelfRendererContent
  trackingParams?: string
}

export interface ShelfRendererContent {
  verticalListRenderer?: VerticalListRenderer
}

export interface VerticalListRenderer {
  items?: VerticalListRendererItem[]
  collapsedItemCount?: number
  collapsedStateButtonText?: CollapsedStateButtonTextClass
  trackingParams?: string
}

export interface CollapsedStateButtonTextClass {
  runs?: TextRun[]
  accessibility?: AccessibilityData
}

export interface VerticalListRendererItem {
  videoRenderer?: ItemVideoRenderer
}

export interface ItemVideoRenderer {
  videoId?: string
  thumbnail?: ChannelRendererThumbnail
  title?: CollapsedStateButtonTextClass
  longBylineText?: Text
  publishedTimeText?: PublishedTimeTextClass
  lengthText?: SubscriberCountTextClass
  viewCountText?: PublishedTimeTextClass
  navigationEndpoint?: PurpleNavigationEndpoint
  ownerText?: Text
  shortBylineText?: Text
  trackingParams?: string
  showActionMenu?: boolean
  shortViewCountText?: SubscriberCountTextClass
  menu?: Menu
  channelThumbnailSupportedRenderers?: ChannelThumbnailSupportedRenderers
  thumbnailOverlays?: ThumbnailOverlay[]
  richThumbnail?: RichThumbnail
  detailedMetadataSnippets?: DetailedMetadataSnippet[]
  ownerBadges?: OwnerBadgeElement[]
  badges?: OwnerBadgeElement[]
  isWatched?: boolean
}

export interface OwnerBadgeElement {
  metadataBadgeRenderer?: OwnerBadgeMetadataBadgeRenderer
}

export interface OwnerBadgeMetadataBadgeRenderer {
  style?: MetadataBadgeRendererStyle
  label?: string
  trackingParams?: string
  accessibilityData?: Accessibility
  icon?: IconImage
  tooltip?: Tooltip
}

export enum MetadataBadgeRendererStyle {
  BadgeStyleTypeSimple = 'BADGE_STYLE_TYPE_SIMPLE',
  BadgeStyleTypeVerified = 'BADGE_STYLE_TYPE_VERIFIED'
}

export enum Tooltip {
  Подтверждено = 'Подтверждено'
}

export interface ChannelThumbnailSupportedRenderers {
  channelThumbnailWithLinkRenderer?: ChannelThumbnailWithLinkRenderer
}

export interface ChannelThumbnailWithLinkRenderer {
  thumbnail?: ChannelRendererThumbnail
  navigationEndpoint?: RunNavigationEndpoint
  accessibility?: AccessibilityData
}

export interface DetailedMetadataSnippet {
  snippetText?: DescriptionSnippet
  snippetHoverText?: TextElement
  maxOneLine?: boolean
}

export interface Menu {
  menuRenderer?: MenuMenuRenderer
}

export interface MenuMenuRenderer {
  items?: MenuRendererItem[]
  trackingParams?: string
  accessibility?: AccessibilityData
}

export interface MenuRendererItem {
  menuServiceItemRenderer?: FluffyMenuServiceItemRenderer
}

export interface FluffyMenuServiceItemRenderer {
  text?: TextElement
  icon?: IconImage
  serviceEndpoint?: StickyServiceEndpoint
  trackingParams?: string
  hasSeparator?: boolean
}

export interface StickyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint
  playlistEditEndpoint?: ServiceEndpointPlaylistEditEndpoint
  addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
  getReportFormEndpoint?: GetReportFormEndpointClass
}

export interface AddToPlaylistServiceEndpoint {
  videoId?: string
}

export interface ServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: StickyAction[]
}

export interface StickyAction {
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
  actions?: IndigoAction[]
}

export interface IndigoAction {
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
  commandMetadata?: ContinuationEndpointCommandMetadata
  createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint
}

export interface CreatePlaylistServiceEndpoint {
  videoIds?: string[]
  params?: Params
}

export enum Params {
  CAQ3D = 'CAQ%3D'
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  watchEndpoint?: PurpleWatchEndpoint
}

export interface PurpleWatchEndpoint {
  videoId?: string
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
  params?: string
  startTimeSeconds?: number
  playerParams?: string
}

export interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig
}

export interface Html5PlaybackOnesieConfig {
  commonConfig?: CommonConfig
}

export interface CommonConfig {
  url?: string
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
  thumbnails?: ThumbnailElement[]
  logAsMovingThumbnail?: boolean
}

export interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer
}

export interface ThumbnailOverlayNowPlayingRenderer {
  text?: TextElement
}

export interface ThumbnailOverlayResumePlaybackRenderer {
  percentDurationWatched?: number
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text?: SubscriberCountTextClass
  style?: ThumbnailOverlayTimeStatusRendererStyle
}

export enum ThumbnailOverlayTimeStatusRendererStyle {
  Default = 'DEFAULT'
}

export interface ThumbnailOverlayToggleButtonRenderer {
  isToggled?: boolean
  untoggledIcon?: IconImage
  toggledIcon?: IconImage
  untoggledTooltip?: UntoggledTooltip
  toggledTooltip?: ToggledTooltip
  untoggledServiceEndpoint?: UntoggledServiceEndpoint
  toggledServiceEndpoint?: ToggledServiceEndpoint
  untoggledAccessibility?: AccessibilityData
  toggledAccessibility?: AccessibilityData
  trackingParams?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  playlistEditEndpoint?: ToggledServiceEndpointPlaylistEditEndpoint
}

export interface ToggledServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: IndecentAction[]
}

export interface IndecentAction {
  action?: CunningAction
  removedVideoId?: string
}

export enum CunningAction {
  ActionRemoveVideoByVideoID = 'ACTION_REMOVE_VIDEO_BY_VIDEO_ID'
}

export enum ToggledTooltip {
  ДобавленоВПлейлистПосмотретьПозже = 'Добавлено в плейлист "Посмотреть позже"'
}

export interface UntoggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  playlistEditEndpoint?: ServiceEndpointPlaylistEditEndpoint
  signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint
}

export enum UntoggledTooltip {
  ДобавитьВОчередь = 'Добавить в очередь',
  СмотретьПозже = 'Смотреть позже'
}

export interface ContentVideoRenderer {
  videoId?: string
  thumbnail?: ChannelRendererThumbnail
  title?: CollapsedStateButtonTextClass
  longBylineText?: Text
  publishedTimeText?: PublishedTimeTextClass
  lengthText?: SubscriberCountTextClass
  viewCountText?: PublishedTimeTextClass
  navigationEndpoint?: FluffyNavigationEndpoint
  ownerText?: Text
  shortBylineText?: Text
  trackingParams?: string
  showActionMenu?: boolean
  shortViewCountText?: SubscriberCountTextClass
  menu?: Menu
  channelThumbnailSupportedRenderers?: ChannelThumbnailSupportedRenderers
  thumbnailOverlays?: ThumbnailOverlay[]
  richThumbnail?: RichThumbnail
  detailedMetadataSnippets?: DetailedMetadataSnippet[]
  ownerBadges?: OwnerBadgeElement[]
  badges?: PurpleBadge[]
}

export interface PurpleBadge {
  metadataBadgeRenderer?: PurpleMetadataBadgeRenderer
}

export interface PurpleMetadataBadgeRenderer {
  style?: MetadataBadgeRendererStyle
  label?: string
  trackingParams?: string
}

export interface FluffyNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  watchEndpoint?: FluffyWatchEndpoint
}

export interface FluffyWatchEndpoint {
  videoId?: string
  params?: string
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

export interface SubMenu {
  searchSubMenuRenderer?: SearchSubMenuRenderer
}

export interface SearchSubMenuRenderer {
  title?: TextElement
  groups?: Group[]
  trackingParams?: string
  button?: Button
}

export interface Button {
  toggleButtonRenderer?: ToggleButtonRenderer
}

export interface ToggleButtonRenderer {
  style?: ToggledStyleClass
  isToggled?: boolean
  isDisabled?: boolean
  defaultIcon?: IconImage
  defaultText?: TextElement
  accessibility?: Accessibility
  trackingParams?: string
  defaultTooltip?: string
  toggledTooltip?: string
  toggledStyle?: ToggledStyleClass
  accessibilityData?: AccessibilityData
}

export interface ToggledStyleClass {
  styleType?: string
}

export interface Group {
  searchFilterGroupRenderer?: SearchFilterGroupRenderer
}

export interface SearchFilterGroupRenderer {
  title?: PublishedTimeTextClass
  filters?: Filter[]
  trackingParams?: string
}

export interface Filter {
  searchFilterRenderer?: SearchFilterRenderer
}

export interface SearchFilterRenderer {
  label?: PublishedTimeTextClass
  navigationEndpoint?: NavigationEndpointClass
  tooltip?: string
  trackingParams?: string
  status?: string
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

export interface ResponseContext {
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
  backButton?: BackButtonClass
  forwardButton?: BackButtonClass
  a11ySkipNavigationButton?: A11YSkipNavigationButtonClass
  voiceSearchButton?: VoiceSearchButton
}

export interface BackButtonClass {
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
  title?: TextElement
  sections?: HotkeyDialogRendererSection[]
  dismissButton?: DismissButtonClass
  trackingParams?: string
}

export interface HotkeyDialogRendererSection {
  hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
}

export interface HotkeyDialogSectionRenderer {
  title?: TextElement
  options?: Option[]
}

export interface Option {
  hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
}

export interface HotkeyDialogSectionOptionRenderer {
  label?: TextElement
  hotkey?: string
  hotkeyAccessibilityLabel?: AccessibilityData
}

export interface Logo {
  topbarLogoRenderer?: TopbarLogoRenderer
}

export interface TopbarLogoRenderer {
  iconImage?: IconImage
  tooltipText?: TextElement
  endpoint?: Endpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface Endpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  browseEndpoint?: EndpointBrowseEndpoint
}

export interface EndpointBrowseEndpoint {
  browseId?: string
}

export interface Searchbox {
  fusionSearchboxRenderer?: FusionSearchboxRenderer
}

export interface FusionSearchboxRenderer {
  icon?: IconImage
  placeholderText?: TextElement
  config?: Config
  trackingParams?: string
  searchEndpoint?: FusionSearchboxRendererSearchEndpoint
  clearButton?: ClearButtonClass
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
  commandMetadata?: NavigationEndpointCommandMetadata
  searchEndpoint?: PurpleSearchEndpoint
}

export interface PurpleSearchEndpoint {
  query?: string
}

export interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
  notificationTopbarButtonRenderer?: NotificationTopbarButtonRenderer
}

export interface NotificationTopbarButtonRenderer {
  icon?: IconImage
  menuRequest?: MenuRequest
  style?: string
  trackingParams?: string
  accessibility?: AccessibilityData
  tooltip?: string
  updateUnseenCountEndpoint?: UpdateUnseenCountEndpoint
  notificationCount?: number
  handlerDatas?: string[]
}

export interface MenuRequest {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
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
  commandMetadata?: ContinuationEndpointCommandMetadata
  signalServiceEndpoint?: Signal
}

export interface TopbarMenuButtonRenderer {
  icon?: IconImage
  menuRenderer?: TopbarMenuButtonRendererMenuRenderer
  trackingParams?: string
  accessibility?: AccessibilityData
  tooltip?: string
  style?: string
  targetId?: string
  avatar?: Avatar
  menuRequest?: MenuRequest
}

export interface Avatar {
  thumbnails?: ThumbnailElement[]
  accessibility?: AccessibilityData
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
  icon?: IconImage
  title?: TextElement
  navigationEndpoint?: CompactLinkRendererNavigationEndpoint
  trackingParams?: string
  style?: string
}

export interface CompactLinkRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: NavigationEndpointCommandMetadata
  uploadEndpoint?: UploadEndpoint
  signalNavigationEndpoint?: Signal
  urlEndpoint?: URLEndpoint
}

export interface UploadEndpoint {
  hack?: boolean
}

export interface URLEndpoint {
  url?: string
  target?: string
}
