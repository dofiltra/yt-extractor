export interface IYtResponse {
  responseContext?: ResponseContext
  trackingParams?: string
  contents?: Contents
  currentVideoEndpoint?: CurrentVideoEndpointClass
  playerOverlays?: PlayerOverlays
  onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]
  engagementPanels?: EngagementPanel[]
  topbar?: Topbar
  frameworkUpdates?: FrameworkUpdates
}

export interface Contents {
  twoColumnWatchNextResults?: TwoColumnWatchNextResults
}

export interface TwoColumnWatchNextResults {
  results?: TwoColumnWatchNextResultsResults
  secondaryResults?: TwoColumnWatchNextResultsSecondaryResults
  autoplay?: TwoColumnWatchNextResultsAutoplay
}

export interface TwoColumnWatchNextResultsAutoplay {
  autoplay?: AutoplayAutoplay
}

export interface AutoplayAutoplay {
  sets?: Set[]
  countDownSecs?: number
  trackingParams?: string
}

export interface Set {
  mode?: string
  autoplayVideo?: NavigationEndpointElement
}

export interface NavigationEndpointElement {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: AutoplayVideoWatchEndpoint
}

export interface AutoplayVideoCommandMetadata {
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

export interface AutoplayVideoWatchEndpoint {
  videoId?: string
  params?: string
  playerParams?: string
  watchEndpointSupportedPrefetchConfig?: WatchEndpointSupportedPrefetchConfig
}

export interface WatchEndpointSupportedPrefetchConfig {
  prefetchHintConfig?: PrefetchHintConfig
}

export interface PrefetchHintConfig {
  prefetchPriority?: number
  countdownUiRelativeSecondsPrefetchCondition?: number
}

export interface TwoColumnWatchNextResultsResults {
  results?: ResultsResults
}

export interface ResultsResults {
  contents?: ResultsContent[]
  trackingParams?: string
}

export interface ResultsContent {
  videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer
  videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer
  itemSectionRenderer?: ItemSectionRenderer
}

export interface ItemSectionRenderer {
  contents?: ItemSectionRendererContent[]
  trackingParams?: string
  sectionIdentifier?: string
  targetId?: string
}

export interface ItemSectionRendererContent {
  continuationItemRenderer?: PurpleContinuationItemRenderer
}

export interface PurpleContinuationItemRenderer {
  trigger?: string
  continuationEndpoint?: PurpleContinuationEndpoint
}

export interface PurpleContinuationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  continuationCommand?: ContinuationCommand
}

export interface ContinuationEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: string
}

export interface ContinuationCommand {
  token?: string
  request?: string
}

export interface VideoPrimaryInfoRenderer {
  title?: Subtitle
  viewCount?: ViewCount
  videoActions?: VideoActions
  trackingParams?: string
  sentimentBar?: SentimentBar
  dateText?: CancelText
}

export interface CancelText {
  simpleText?: string
}

export interface SentimentBar {
  sentimentBarRenderer?: SentimentBarRenderer
}

export interface SentimentBarRenderer {
  percentIfIndifferent?: number
  percentIfLiked?: number
  percentIfDisliked?: number
  likeStatus?: string
  tooltip?: string
}

export interface Subtitle {
  runs?: SubtitleRun[]
}

export interface SubtitleRun {
  text?: string
}

export interface VideoActions {
  menuRenderer?: VideoActionsMenuRenderer
}

export interface VideoActionsMenuRenderer {
  items?: PurpleItem[]
  trackingParams?: string
  topLevelButtons?: TopLevelButton[]
  accessibility?: AccessibilityData
}

export interface AccessibilityData {
  accessibilityData?: Accessibility
}

export interface Accessibility {
  label?: string
}

export interface PurpleItem {
  menuServiceItemRenderer?: PurpleMenuServiceItemRenderer
}

export interface PurpleMenuServiceItemRenderer {
  text?: Subtitle
  icon?: Icon
  serviceEndpoint?: PurpleServiceEndpoint
  trackingParams?: string
}

export interface Icon {
  iconType?: string
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  getReportFormEndpoint?: GetTranscriptEndpointClass
  signalServiceEndpoint?: PurpleSignalServiceEndpoint
}

export interface GetTranscriptEndpointClass {
  params?: string
}

export interface PurpleSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: ActionElement[]
}

export interface ActionElement {
  clickTrackingParams?: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
}

export interface ChangeEngagementPanelVisibilityAction {
  targetId?: string
  visibility?: string
}

export enum SignalEnum {
  ClientSignal = 'CLIENT_SIGNAL'
}

export interface TopLevelButton {
  toggleButtonRenderer?: ToggleButtonRenderer
  buttonRenderer?: TopLevelButtonButtonRenderer
}

export interface TopLevelButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  text?: Subtitle
  serviceEndpoint?: CommandClass
  icon?: Icon
  tooltip?: string
  trackingParams?: string
  accessibilityData?: AccessibilityData
  accessibility?: Accessibility
}

export interface CommandClass {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
  addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
}

export interface AddToPlaylistServiceEndpoint {
  videoId?: string
}

export interface ShareEntityServiceEndpoint {
  serializedShareEntity?: string
  commands?: ShareEntityServiceEndpointCommand[]
}

export interface ShareEntityServiceEndpointCommand {
  clickTrackingParams?: string
  openPopupAction?: PurpleOpenPopupAction
}

export interface PurpleOpenPopupAction {
  popup?: PurplePopup
  popupType?: PurplePopupType
  beReused?: boolean
}

export interface PurplePopup {
  unifiedSharePanelRenderer?: UnifiedSharePanelRenderer
}

export interface UnifiedSharePanelRenderer {
  trackingParams?: string
  showLoadingSpinner?: boolean
}

export enum PurplePopupType {
  Dialog = 'DIALOG'
}

export interface ToggleButtonRenderer {
  style?: StyleClass
  isToggled?: boolean
  isDisabled?: boolean
  defaultIcon?: Icon
  defaultText?: ShortViewCountText
  defaultServiceEndpoint?: DefaultServiceEndpoint
  toggledText?: ShortViewCountText
  toggledServiceEndpoint?: ToggleButtonRendererToggledServiceEndpoint
  accessibility?: Accessibility
  trackingParams?: string
  defaultTooltip?: string
  toggledTooltip?: string
  toggledStyle?: StyleClass
  accessibilityData?: AccessibilityData
  toggleButtonSupportedData?: ToggleButtonSupportedData
  targetId?: string
}

export interface DefaultServiceEndpoint {
  clickTrackingParams?: string
  commandExecutorCommand?: DefaultServiceEndpointCommandExecutorCommand
}

export interface DefaultServiceEndpointCommandExecutorCommand {
  commands?: PurpleCommand[]
}

export interface PurpleCommand {
  clickTrackingParams?: string
  updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand
  commandMetadata?: ContinuationEndpointCommandMetadata
  likeEndpoint?: CommandLikeEndpoint
}

export interface CommandLikeEndpoint {
  status?: string
  target?: AddToPlaylistServiceEndpoint
  likeParams?: string
  dislikeParams?: string
}

export interface UpdateToggleButtonStateCommand {
  toggled?: boolean
  buttonId?: string
}

export interface ShortViewCountText {
  accessibility?: AccessibilityData
  simpleText?: string
}

export interface StyleClass {
  styleType?: string
}

export interface ToggleButtonSupportedData {
  toggleButtonIdData?: ToggleButtonIDData
}

export interface ToggleButtonIDData {
  id?: string
}

export interface ToggleButtonRendererToggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  likeEndpoint?: ToggledServiceEndpointLikeEndpoint
}

export interface ToggledServiceEndpointLikeEndpoint {
  status?: string
  target?: AddToPlaylistServiceEndpoint
  removeLikeParams?: string
}

export interface ViewCount {
  videoViewCountRenderer?: VideoViewCountRenderer
}

export interface VideoViewCountRenderer {
  viewCount?: CancelText
  shortViewCount?: CancelText
}

export interface VideoSecondaryInfoRenderer {
  owner?: Owner
  description?: Description
  subscribeButton?: SubscribeButton
  metadataRowContainer?: MetadataRowContainer
  showMoreText?: CancelText
  showLessText?: CancelText
  trackingParams?: string
  defaultExpanded?: boolean
  descriptionCollapsedLines?: number
}

export interface Description {
  runs?: DescriptionRun[]
}

export interface DescriptionRun {
  text?: string
  navigationEndpoint?: OnTap
}

export interface OnTap {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: OnTapWatchEndpoint
}

export interface OnTapWatchEndpoint {
  videoId?: VideoID
  continuePlayback?: boolean
  startTimeSeconds?: number
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

export enum VideoID {
  EEQAMDO3C = '_E_eQaMDO3c'
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

export interface MetadataRowContainer {
  metadataRowContainerRenderer?: MetadataRowContainerRenderer
}

export interface MetadataRowContainerRenderer {
  collapsedItemCount?: number
  trackingParams?: string
}

export interface Owner {
  videoOwnerRenderer?: VideoOwnerRenderer
}

export interface VideoOwnerRenderer {
  thumbnail?: Background
  title?: Byline
  subscriptionButton?: SubscriptionButton
  navigationEndpoint?: VideoOwnerRendererNavigationEndpoint
  subscriberCountText?: ShortViewCountText
  trackingParams?: string
}

export interface VideoOwnerRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  browseEndpoint?: NavigationEndpointBrowseEndpoint
}

export interface NavigationEndpointBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface SubscriptionButton {
  type?: string
  subscribed?: boolean
}

export interface Background {
  thumbnails?: Thumbnail[]
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface Byline {
  runs?: BylineRun[]
}

export interface BylineRun {
  text?: string
  navigationEndpoint?: VideoOwnerRendererNavigationEndpoint
}

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: Subtitle
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: string
  showPreferences?: boolean
  subscribedButtonText?: Subtitle
  unsubscribedButtonText?: Subtitle
  trackingParams?: string
  unsubscribeButtonText?: Subtitle
  subscribeAccessibility?: AccessibilityData
  unsubscribeAccessibility?: AccessibilityData
  notificationPreferenceButton?: NotificationPreferenceButton
  targetId?: string
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
  commandExecutorCommand?: CommandCommandExecutorCommand
}

export interface CommandCommandExecutorCommand {
  commands?: FluffyCommand[]
}

export interface FluffyCommand {
  clickTrackingParams?: string
  openPopupAction?: FluffyOpenPopupAction
}

export interface FluffyOpenPopupAction {
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
  text?: CancelText
  icon?: Icon
  serviceEndpoint?: FluffyServiceEndpoint
  trackingParams?: string
  isSelected?: boolean
}

export interface FluffyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  modifyChannelNotificationPreferenceEndpoint?: GetTranscriptEndpointClass
}

export interface State {
  stateId?: number
  nextStateId?: number
  state?: ClearButton
}

export interface ClearButton {
  buttonRenderer?: ClearButtonButtonRenderer
}

export interface ClearButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  icon?: Icon
  accessibility?: Accessibility
  trackingParams?: string
  accessibilityData?: AccessibilityData
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

export interface OnUnsubscribeEndpointCommandMetadata {
  webCommandMetadata?: TentacledWebCommandMetadata
}

export interface TentacledWebCommandMetadata {
  sendPost?: boolean
}

export interface OnUnsubscribeEndpointSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: PurpleAction[]
}

export interface PurpleAction {
  clickTrackingParams?: string
  openPopupAction?: TentacledOpenPopupAction
}

export interface TentacledOpenPopupAction {
  popup?: TentacledPopup
  popupType?: PurplePopupType
}

export interface TentacledPopup {
  confirmDialogRenderer?: ConfirmDialogRenderer
}

export interface ConfirmDialogRenderer {
  trackingParams?: string
  dialogMessages?: Subtitle[]
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
  text?: Subtitle
  accessibility?: Accessibility
  trackingParams?: string
  serviceEndpoint?: TentacledServiceEndpoint
  command?: TentacledCommand
  navigationEndpoint?: CurrentVideoEndpointClass
}

export interface TentacledCommand {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  continuationCommand?: ContinuationCommand
  signalServiceEndpoint?: CommandSignalServiceEndpoint
}

export interface CommandSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: FluffyAction[]
}

export interface FluffyAction {
  clickTrackingParams?: string
  signalAction?: Signal
}

export interface Signal {
  signal?: string
}

export interface CurrentVideoEndpointClass {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: CurrentVideoEndpointWatchEndpoint
}

export interface CurrentVideoEndpointWatchEndpoint {
  videoId?: string
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

export interface TentacledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
}

export interface TwoColumnWatchNextResultsSecondaryResults {
  secondaryResults?: SecondaryResultsSecondaryResults
}

export interface SecondaryResultsSecondaryResults {
  results?: SecondaryResultsResult[]
  trackingParams?: string
  targetId?: string
}

export interface SecondaryResultsResult {
  compactVideoRenderer?: CompactVideoRenderer
  continuationItemRenderer?: ResultContinuationItemRenderer
}

export interface CompactVideoRenderer {
  videoId?: string
  thumbnail?: Background
  title?: ShortViewCountText
  longBylineText?: Byline
  publishedTimeText?: CancelText
  viewCountText?: CancelText
  lengthText?: ShortViewCountText
  navigationEndpoint?: CompactVideoRendererNavigationEndpoint
  shortBylineText?: Byline
  channelThumbnail?: Background
  trackingParams?: string
  shortViewCountText?: ShortViewCountText
  menu?: CompactVideoRendererMenu
  thumbnailOverlays?: CompactVideoRendererThumbnailOverlay[]
  accessibility?: AccessibilityData
  richThumbnail?: RichThumbnail
  ownerBadges?: OwnerBadge[]
  badges?: Badge[]
}

export interface Badge {
  metadataBadgeRenderer?: BadgeMetadataBadgeRenderer
}

export interface BadgeMetadataBadgeRenderer {
  style?: string
  label?: string
  trackingParams?: string
}

export interface CompactVideoRendererMenu {
  menuRenderer?: PurpleMenuRenderer
}

export interface PurpleMenuRenderer {
  items?: FluffyItem[]
  trackingParams?: string
  accessibility?: AccessibilityData
  targetId?: string
}

export interface FluffyItem {
  menuServiceItemRenderer?: TentacledMenuServiceItemRenderer
}

export interface TentacledMenuServiceItemRenderer {
  text?: Subtitle
  icon?: Icon
  serviceEndpoint?: StickyServiceEndpoint
  trackingParams?: string
  hasSeparator?: boolean
}

export interface StickyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  signalServiceEndpoint?: FluffySignalServiceEndpoint
  playlistEditEndpoint?: ServiceEndpointPlaylistEditEndpoint
  addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
  feedbackEndpoint?: FeedbackEndpoint
  getReportFormEndpoint?: GetTranscriptEndpointClass
}

export interface FeedbackEndpoint {
  feedbackToken?: string
  uiActions?: UIActions
  actions?: FeedbackEndpointAction[]
}

export interface FeedbackEndpointAction {
  clickTrackingParams?: string
  replaceEnclosingAction?: ReplaceEnclosingAction
}

export interface ReplaceEnclosingAction {
  item?: ReplaceEnclosingActionItem
}

export interface ReplaceEnclosingActionItem {
  notificationMultiActionRenderer?: NotificationMultiActionRenderer
}

export interface NotificationMultiActionRenderer {
  responseText?: ShortViewCountText
  buttons?: ButtonElement[]
  trackingParams?: string
}

export interface ButtonElement {
  buttonRenderer?: PurpleButtonRenderer
}

export interface PurpleButtonRenderer {
  style?: ButtonRendererStyle
  text?: Subtitle
  serviceEndpoint?: IndigoServiceEndpoint
  trackingParams?: string
}

export interface IndigoServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  undoFeedbackEndpoint?: UndoFeedbackEndpoint
  signalServiceEndpoint?: CommandSignalServiceEndpoint
}

export interface UndoFeedbackEndpoint {
  undoToken?: string
  actions?: UndoFeedbackEndpointAction[]
}

export interface UndoFeedbackEndpointAction {
  clickTrackingParams?: string
  undoFeedbackAction?: UploadEndpoint
}

export interface UploadEndpoint {
  hack?: boolean
}

export enum ButtonRendererStyle {
  StyleBlueText = 'STYLE_BLUE_TEXT'
}

export interface UIActions {
  hideEnclosingContainer?: boolean
}

export interface ServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: TentacledAction[]
}

export interface TentacledAction {
  addedVideoId?: string
  action?: CunningAction
}

export enum CunningAction {
  ActionAddVideo = 'ACTION_ADD_VIDEO'
}

export enum PlaylistID {
  Wl = 'WL'
}

export interface FluffySignalServiceEndpoint {
  signal?: SignalEnum
  actions?: StickyAction[]
}

export interface StickyAction {
  clickTrackingParams?: string
  addToPlaylistCommand?: AddToPlaylistCommand
  openPopupAction?: StickyOpenPopupAction
}

export interface AddToPlaylistCommand {
  openMiniplayer?: boolean
  openListPanel?: boolean
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

export interface StickyOpenPopupAction {
  popup?: StickyPopup
  popupType?: FluffyPopupType
}

export interface StickyPopup {
  notificationActionRenderer?: NotificationActionRenderer
}

export interface NotificationActionRenderer {
  responseText?: CancelText
  trackingParams?: string
}

export enum FluffyPopupType {
  Toast = 'TOAST'
}

export interface CompactVideoRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: PurpleWatchEndpoint
}

export interface PurpleWatchEndpoint {
  videoId?: string
  nofollow?: boolean
  watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
  params?: string
  startTimeSeconds?: number
}

export interface OwnerBadge {
  metadataBadgeRenderer?: OwnerBadgeMetadataBadgeRenderer
}

export interface OwnerBadgeMetadataBadgeRenderer {
  icon?: Icon
  style?: MetadataBadgeRendererStyle
  tooltip?: Tooltip
  trackingParams?: string
  accessibilityData?: Accessibility
}

export enum MetadataBadgeRendererStyle {
  BadgeStyleTypeVerified = 'BADGE_STYLE_TYPE_VERIFIED'
}

export enum Tooltip {
  Подтверждено = 'Подтверждено'
}

export interface RichThumbnail {
  movingThumbnailRenderer?: MovingThumbnailRenderer
}

export interface MovingThumbnailRenderer {
  enableHoveredLogging?: boolean
  enableOverlay?: boolean
  movingThumbnailDetails?: MovingThumbnailDetails
}

export interface MovingThumbnailDetails {
  thumbnails?: Thumbnail[]
  logAsMovingThumbnail?: boolean
}

export interface CompactVideoRendererThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer
}

export interface ThumbnailOverlayNowPlayingRenderer {
  text?: Subtitle
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
  untoggledIcon?: Icon
  toggledIcon?: Icon
  untoggledTooltip?: UntoggledTooltip
  toggledTooltip?: ToggledTooltip
  untoggledServiceEndpoint?: ServiceEndpoint
  toggledServiceEndpoint?: ThumbnailOverlayToggleButtonRendererToggledServiceEndpoint
  untoggledAccessibility?: AccessibilityData
  toggledAccessibility?: AccessibilityData
  trackingParams?: string
}

export interface ThumbnailOverlayToggleButtonRendererToggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  playlistEditEndpoint?: ToggledServiceEndpointPlaylistEditEndpoint
}

export interface ToggledServiceEndpointPlaylistEditEndpoint {
  playlistId?: PlaylistID
  actions?: IndigoAction[]
}

export interface IndigoAction {
  action?: MagentaAction
  removedVideoId?: string
}

export enum MagentaAction {
  ActionRemoveVideoByVideoID = 'ACTION_REMOVE_VIDEO_BY_VIDEO_ID'
}

export enum ToggledTooltip {
  ДобавленоВПлейлистПосмотретьПозже = 'Добавлено в плейлист "Посмотреть позже"'
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  playlistEditEndpoint?: ServiceEndpointPlaylistEditEndpoint
  signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint
  addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
}

export interface UntoggledServiceEndpointSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: IndecentAction[]
}

export interface IndecentAction {
  clickTrackingParams?: string
  addToPlaylistCommand?: AddToPlaylistCommand
}

export enum UntoggledTooltip {
  ДобавитьВОчередь = 'Добавить в очередь',
  СмотретьПозже = 'Смотреть позже'
}

export interface ResultContinuationItemRenderer {
  trigger?: string
  continuationEndpoint?: PurpleContinuationEndpoint
  button?: A11YSkipNavigationButtonClass
}

export interface EngagementPanel {
  engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer
}

export interface EngagementPanelSectionListRenderer {
  panelIdentifier?: string
  header?: Header
  content?: EngagementPanelSectionListRendererContent
  targetId?: string
  visibility?: string
  loggingDirectives?: LoggingDirectives
}

export interface EngagementPanelSectionListRendererContent {
  continuationItemRenderer?: FluffyContinuationItemRenderer
  macroMarkersListRenderer?: MacroMarkersListRenderer
}

export interface FluffyContinuationItemRenderer {
  trigger?: string
  continuationEndpoint?: FluffyContinuationEndpoint
}

export interface FluffyContinuationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ContinuationEndpointCommandMetadata
  getTranscriptEndpoint?: GetTranscriptEndpointClass
}

export interface MacroMarkersListRenderer {
  contents?: MacroMarkersListRendererContent[]
  syncButtonLabel?: Subtitle
  trackingParams?: string
}

export interface MacroMarkersListRendererContent {
  macroMarkersListItemRenderer?: MacroMarkersListItemRenderer
}

export interface MacroMarkersListItemRenderer {
  title?: CancelText
  timeDescription?: CancelText
  thumbnail?: Background
  onTap?: OnTap
  trackingParams?: string
  shareButton?: ShareButton
}

export interface ShareButton {
  buttonRenderer?: FluffyButtonRenderer
}

export interface FluffyButtonRenderer {
  style?: string
  icon?: Icon
  trackingParams?: string
  accessibilityData?: AccessibilityData
  command?: CommandClass
}

export interface Header {
  engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
}

export interface EngagementPanelTitleHeaderRenderer {
  title?: Subtitle
  menu?: EngagementPanelTitleHeaderRendererMenu
  visibilityButton?: VisibilityButton
  trackingParams?: string
}

export interface EngagementPanelTitleHeaderRendererMenu {
  menuRenderer?: FluffyMenuRenderer
}

export interface FluffyMenuRenderer {
  items?: TentacledItem[]
  trackingParams?: string
  accessibility?: AccessibilityData
}

export interface TentacledItem {
  menuServiceItemRenderer?: StickyMenuServiceItemRenderer
}

export interface StickyMenuServiceItemRenderer {
  text?: Subtitle
  serviceEndpoint?: OnResponseReceivedEndpoint
  trackingParams?: string
}

export interface OnResponseReceivedEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: CommandSignalServiceEndpoint
}

export interface VisibilityButton {
  buttonRenderer?: VisibilityButtonButtonRenderer
}

export interface VisibilityButtonButtonRenderer {
  icon?: Icon
  accessibility?: Accessibility
  trackingParams?: string
  accessibilityData?: AccessibilityData
  command?: ActionElement
}

export interface LoggingDirectives {
  trackingParams?: string
  visibility?: Visibility
}

export interface Visibility {
  types?: string
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
  options?: Options
  payload?: Payload
}

export interface Options {
  persistenceOption?: string
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

export interface PlayerOverlays {
  playerOverlayRenderer?: PlayerOverlayRenderer
}

export interface PlayerOverlayRenderer {
  endScreen?: EndScreen
  autoplay?: PlayerOverlayRendererAutoplay
  shareButton?: ShareButtonClass
  addToMenu?: AddToMenu
  videoDetails?: VideoDetails
  decoratedPlayerBarRenderer?: PlayerOverlayRendererDecoratedPlayerBarRenderer
}

export interface AddToMenu {
  menuRenderer?: AddToMenuMenuRenderer
}

export interface AddToMenuMenuRenderer {
  items?: StickyItem[]
  trackingParams?: string
}

export interface StickyItem {
  menuServiceItemRenderer?: IndigoMenuServiceItemRenderer
}

export interface IndigoMenuServiceItemRenderer {
  text?: Subtitle
  icon?: Icon
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
  hasSeparator?: boolean
}

export interface PlayerOverlayRendererAutoplay {
  playerOverlayAutoplayRenderer?: PlayerOverlayAutoplayRenderer
}

export interface PlayerOverlayAutoplayRenderer {
  title?: CancelText
  videoTitle?: ShortViewCountText
  byline?: Byline
  cancelText?: CancelText
  pauseText?: CancelText
  background?: Background
  countDownSecs?: number
  nextButton?: A11YSkipNavigationButtonClass
  trackingParams?: string
  thumbnailOverlays?: PlayerOverlayAutoplayRendererThumbnailOverlay[]
  preferImmediateRedirect?: boolean
  videoId?: string
  publishedTimeText?: CancelText
  webShowNewAutonavCountdown?: boolean
  webShowBigThumbnailEndscreen?: boolean
  shortViewCountText?: ShortViewCountText
}

export interface PlayerOverlayAutoplayRendererThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
}

export interface PlayerOverlayRendererDecoratedPlayerBarRenderer {
  decoratedPlayerBarRenderer?: DecoratedPlayerBarRendererDecoratedPlayerBarRenderer
}

export interface DecoratedPlayerBarRendererDecoratedPlayerBarRenderer {
  playerBar?: PlayerBar
  playerBarActionButton?: PlayerBarActionButton
}

export interface PlayerBar {
  multiMarkersPlayerBarRenderer?: MultiMarkersPlayerBarRenderer
}

export interface MultiMarkersPlayerBarRenderer {
  visibleOnLoad?: VisibleOnLoad
  markersMap?: MarkersMap[]
}

export interface MarkersMap {
  key?: string
  value?: Value
}

export interface Value {
  chapters?: Chapter[]
  trackingParams?: string
}

export interface Chapter {
  chapterRenderer?: ChapterRenderer
}

export interface ChapterRenderer {
  title?: CancelText
  timeRangeStartMillis?: number
  onActiveCommand?: OnActiveCommand
  thumbnail?: Background
}

export interface OnActiveCommand {
  clickTrackingParams?: string
  setActivePanelItemAction?: SetActivePanelItemAction
}

export interface SetActivePanelItemAction {
  panelTargetId?: string
  itemIndex?: number
}

export interface VisibleOnLoad {
  key?: string
}

export interface PlayerBarActionButton {
  buttonRenderer?: PlayerBarActionButtonButtonRenderer
}

export interface PlayerBarActionButtonButtonRenderer {
  text?: Subtitle
  trackingParams?: string
  command?: ActionElement
}

export interface EndScreen {
  watchNextEndScreenRenderer?: WatchNextEndScreenRenderer
}

export interface WatchNextEndScreenRenderer {
  results?: WatchNextEndScreenRendererResult[]
  title?: CancelText
  trackingParams?: string
}

export interface WatchNextEndScreenRendererResult {
  endScreenVideoRenderer?: EndScreenVideoRenderer
}

export interface EndScreenVideoRenderer {
  videoId?: string
  thumbnail?: Background
  title?: ShortViewCountText
  shortBylineText?: Byline
  lengthText?: ShortViewCountText
  lengthInSeconds?: number
  navigationEndpoint?: CurrentVideoEndpointClass
  trackingParams?: string
  shortViewCountText?: ShortViewCountText
  publishedTimeText?: CancelText
  thumbnailOverlays?: EndScreenVideoRendererThumbnailOverlay[]
}

export interface EndScreenVideoRendererThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
}

export interface ShareButtonClass {
  buttonRenderer?: VoiceSearchButtonButtonRenderer
}

export interface VoiceSearchButtonButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  icon?: Icon
  navigationEndpoint?: CommandClass
  tooltip?: string
  trackingParams?: string
  serviceEndpoint?: IndecentServiceEndpoint
  accessibilityData?: AccessibilityData
}

export interface IndecentServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: OnUnsubscribeEndpointCommandMetadata
  signalServiceEndpoint?: TentacledSignalServiceEndpoint
}

export interface TentacledSignalServiceEndpoint {
  signal?: SignalEnum
  actions?: HilariousAction[]
}

export interface HilariousAction {
  clickTrackingParams?: string
  openPopupAction?: IndigoOpenPopupAction
}

export interface IndigoOpenPopupAction {
  popup?: IndigoPopup
  popupType?: string
}

export interface IndigoPopup {
  voiceSearchDialogRenderer?: VoiceSearchDialogRenderer
}

export interface VoiceSearchDialogRenderer {
  placeholderHeader?: Subtitle
  promptHeader?: Subtitle
  exampleQuery1?: Subtitle
  exampleQuery2?: Subtitle
  promptMicrophoneLabel?: Subtitle
  loadingHeader?: Subtitle
  connectionErrorHeader?: Subtitle
  connectionErrorMicrophoneLabel?: Subtitle
  permissionsHeader?: Subtitle
  permissionsSubtext?: Subtitle
  disabledHeader?: Subtitle
  disabledSubtext?: Subtitle
  exitButton?: ClearButton
  trackingParams?: string
  microphoneOffPromptHeader?: Subtitle
}

export interface VideoDetails {
  playerOverlayVideoDetailsRenderer?: PlayerOverlayVideoDetailsRenderer
}

export interface PlayerOverlayVideoDetailsRenderer {
  title?: CancelText
  subtitle?: Subtitle
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
  webPrefetchData?: WebPrefetchData
  hasDecorated?: boolean
}

export interface WebPrefetchData {
  navigationEndpoints?: NavigationEndpointElement[]
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
  voiceSearchButton?: ShareButtonClass
}

export interface BackButtonClass {
  buttonRenderer?: BackButtonButtonRenderer
}

export interface BackButtonButtonRenderer {
  trackingParams?: string
  command?: OnResponseReceivedEndpoint
}

export interface HotkeyDialog {
  hotkeyDialogRenderer?: HotkeyDialogRenderer
}

export interface HotkeyDialogRenderer {
  title?: Subtitle
  sections?: HotkeyDialogRendererSection[]
  dismissButton?: A11YSkipNavigationButtonClass
  trackingParams?: string
}

export interface HotkeyDialogRendererSection {
  hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
}

export interface HotkeyDialogSectionRenderer {
  title?: Subtitle
  options?: Option[]
}

export interface Option {
  hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
}

export interface HotkeyDialogSectionOptionRenderer {
  label?: Subtitle
  hotkey?: string
  hotkeyAccessibilityLabel?: AccessibilityData
}

export interface Logo {
  topbarLogoRenderer?: TopbarLogoRenderer
}

export interface TopbarLogoRenderer {
  iconImage?: Icon
  tooltipText?: Subtitle
  endpoint?: Endpoint
  trackingParams?: string
  overrideEntityKey?: string
}

export interface Endpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  browseEndpoint?: EndpointBrowseEndpoint
}

export interface EndpointBrowseEndpoint {
  browseId?: string
}

export interface Searchbox {
  fusionSearchboxRenderer?: FusionSearchboxRenderer
}

export interface FusionSearchboxRenderer {
  icon?: Icon
  placeholderText?: Subtitle
  config?: Config
  trackingParams?: string
  searchEndpoint?: FusionSearchboxRendererSearchEndpoint
  clearButton?: ClearButton
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
  commandMetadata?: AutoplayVideoCommandMetadata
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
  icon?: Icon
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
  actions?: AmbitiousAction[]
}

export interface AmbitiousAction {
  clickTrackingParams?: string
  openPopupAction?: IndecentOpenPopupAction
}

export interface IndecentOpenPopupAction {
  popup?: IndecentPopup
  popupType?: string
  beReused?: boolean
}

export interface IndecentPopup {
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
  icon?: Icon
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
  thumbnails?: Thumbnail[]
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
  icon?: Icon
  title?: Subtitle
  navigationEndpoint?: CompactLinkRendererNavigationEndpoint
  trackingParams?: string
  style?: string
}

export interface CompactLinkRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  uploadEndpoint?: UploadEndpoint
  signalNavigationEndpoint?: Signal
  urlEndpoint?: URLEndpoint
}

export interface URLEndpoint {
  url?: string
  target?: string
}
