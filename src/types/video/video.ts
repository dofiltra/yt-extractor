export interface IYtVideoResponse {
  page?: string
  rootVe?: string
  preconnect?: string[]
  playerResponse?: PlayerResponse
  response?: Response
  xsrf_token?: string
  url?: string
  timing?: Timing
}

export interface PlayerResponse {
  responseContext?: PlayerResponseResponseContext
  playabilityStatus?: PlayabilityStatus
  streamingData?: StreamingData
  playbackTracking?: PlaybackTracking
  captions?: Captions
  videoDetails?: PlayerResponseVideoDetails
  playerConfig?: PlayerConfig
  storyboards?: Storyboards
  microformat?: Microformat
  trackingParams?: string
  attestation?: Attestation
}

export interface Attestation {
  playerAttestationRenderer?: PlayerAttestationRenderer
}

export interface PlayerAttestationRenderer {
  challenge?: string
  botguardData?: BotguardData
}

export interface BotguardData {
  program?: string
  interpreterUrl?: string
  interpreterSafeUrl?: InterpreterSafeURL
}

export interface InterpreterSafeURL {
  privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
}

export interface Captions {
  playerCaptionsRenderer?: PlayerCaptionsRenderer
  playerCaptionsTracklistRenderer?: PlayerCaptionsTracklistRenderer
}

export interface PlayerCaptionsRenderer {
  baseUrl?: string
  visibility?: string
}

export interface PlayerCaptionsTracklistRenderer {
  captionTracks?: CaptionTrack[]
  audioTracks?: AudioTrack[]
  translationLanguages?: TranslationLanguage[]
  defaultAudioTrackIndex?: number
}

export interface AudioTrack {
  captionTrackIndices?: number[]
}

export interface CaptionTrack {
  baseUrl?: string
  name?: Title
  vssId?: string
  languageCode?: string
  kind?: string
  isTranslatable?: boolean
}

export interface Title {
  runs?: NameRun[]
}

export interface NameRun {
  text?: string
}

export interface TranslationLanguage {
  languageCode?: string
  languageName?: Title
}

export interface Microformat {
  playerMicroformatRenderer?: PlayerMicroformatRenderer
}

export interface PlayerMicroformatRenderer {
  thumbnail?: BackgroundClass
  embed?: Embed
  title?: Title
  lengthSeconds?: string
  ownerProfileUrl?: string
  externalChannelId?: string
  isFamilySafe?: boolean
  availableCountries?: string[]
  isUnlisted?: boolean
  hasYpcMetadata?: boolean
  viewCount?: string
  category?: string
  publishDate?: Date
  ownerChannelName?: string
  uploadDate?: Date
}

export interface Embed {
  iframeUrl?: string
  flashUrl?: string
  width?: number
  height?: number
  flashSecureUrl?: string
}

export interface BackgroundClass {
  thumbnails?: ThumbnailElement[]
}

export interface ThumbnailElement {
  url?: string
  width?: number
  height?: number
}

export interface PlayabilityStatus {
  status?: string
  playableInEmbed?: boolean
  contextParams?: string
}

export interface PlaybackTracking {
  videostatsPlaybackUrl?: PtrackingURLClass
  videostatsDelayplayUrl?: PtrackingURLClass
  videostatsWatchtimeUrl?: PtrackingURLClass
  ptrackingUrl?: PtrackingURLClass
  qoeUrl?: PtrackingURLClass
  atrUrl?: AtrURLClass
  videostatsScheduledFlushWalltimeSeconds?: number[]
  videostatsDefaultFlushIntervalSeconds?: number
  youtubeRemarketingUrl?: AtrURLClass
}

export interface AtrURLClass {
  baseUrl?: string
  elapsedMediaTimeSeconds?: number
}

export interface PtrackingURLClass {
  baseUrl?: string
}

export interface PlayerConfig {
  audioConfig?: AudioConfig
  streamSelectionConfig?: StreamSelectionConfig
  mediaCommonConfig?: MediaCommonConfig
}

export interface AudioConfig {
  loudnessDb?: number
  perceptualLoudnessDb?: number
  enablePerFormatLoudness?: boolean
}

export interface MediaCommonConfig {
  dynamicReadaheadConfig?: DynamicReadaheadConfig
}

export interface DynamicReadaheadConfig {
  maxReadAheadMediaTimeMs?: number
  minReadAheadMediaTimeMs?: number
  readAheadGrowthRateMs?: number
}

export interface StreamSelectionConfig {
  maxBitrate?: string
}

export interface PlayerResponseResponseContext {
  serviceTrackingParams?: ServiceTrackingParam[]
  webResponseContextExtensionData?: PurpleWebResponseContextExtensionData
}

export interface ServiceTrackingParam {
  service?: string
  params?: Param[]
}

export interface Param {
  key?: string
  value?: string
}

export interface PurpleWebResponseContextExtensionData {
  hasDecorated?: boolean
}

export interface Storyboards {
  playerStoryboardSpecRenderer?: PlayerStoryboardSpecRenderer
}

export interface PlayerStoryboardSpecRenderer {
  spec?: string
}

export interface StreamingData {
  expiresInSeconds?: string
  formats?: Format[]
}

export interface Format {
  itag?: number
  url?: string
  mimeType?: string
  bitrate?: number
  width?: number
  height?: number
  lastModified?: string
  quality?: string
  fps?: number
  qualityLabel?: string
  projectionType?: string
  audioQuality?: string
  approxDurationMs?: string
  audioSampleRate?: string
  audioChannels?: number
  contentLength?: string
  averageBitrate?: number
}

export interface PlayerResponseVideoDetails {
  videoId?: VideoID
  title?: string
  lengthSeconds?: string
  keywords?: string[]
  channelId?: string
  isOwnerViewing?: boolean
  shortDescription?: string
  isCrawlable?: boolean
  thumbnail?: BackgroundClass
  averageRating?: number
  allowRatings?: boolean
  viewCount?: string
  author?: string
  isPrivate?: boolean
  isUnpluggedCorpus?: boolean
  isLiveContent?: boolean
}

export enum VideoID {
  DLQp0UT9Y4 = 'dlQp0UT9_Y4',
  The4BBch3Rsuvo = '4BBch3rsuvo'
}

export interface Response {
  responseContext?: ResponseResponseContext
  contents?: Contents
  currentVideoEndpoint?: Endpoint
  trackingParams?: string
  playerOverlays?: PlayerOverlays
  engagementPanels?: EngagementPanel[]
  topbar?: Topbar
}

export interface Contents {
  singleColumnWatchNextResults?: SingleColumnWatchNextResults
}

export interface SingleColumnWatchNextResults {
  results?: SingleColumnWatchNextResultsResults
  autoplay?: SingleColumnWatchNextResultsAutoplay
}

export interface SingleColumnWatchNextResultsAutoplay {
  autoplay?: AutoplayAutoplay
}

export interface AutoplayAutoplay {
  sets?: Set[]
  title?: Title
  countDownSecs?: number
  trackingParams?: string
}

export interface Set {
  mode?: string
  autoplayVideo?: AutoplayVideo
  autoplayVideoRenderer?: AutoplayVideoRenderer
}

export interface AutoplayVideo {
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
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface AutoplayVideoWatchEndpoint {
  videoId?: VideoID
  params?: string
  playerParams?: string
}

export interface AutoplayVideoRenderer {
  compactVideoRenderer?: CompactVideoRenderer
}

export interface CompactVideoRenderer {
  videoId?: VideoID
  thumbnail?: BackgroundClass
  title?: ShortViewCountText
  longBylineText?: Byline
  viewCountText?: Title
  lengthText?: ShortViewCountText
  navigationEndpoint?: Endpoint
  shortBylineText?: Byline
  channelThumbnail?: BackgroundClass
  trackingParams?: string
  shortViewCountText?: ShortViewCountText
  menu?: CompactVideoRendererMenu
  thumbnailOverlays?: CompactVideoRendererThumbnailOverlay[]
  accessibility?: DisabledAccessibilityData
}

export interface DisabledAccessibilityData {
  accessibilityData?: AccessibilityData
}

export interface AccessibilityData {
  label?: string
}

export interface ShortViewCountText {
  runs?: NameRun[]
  accessibility?: DisabledAccessibilityData
}

export interface Byline {
  runs?: BylineRun[]
}

export interface BylineRun {
  text?: string
  navigationEndpoint?: RunNavigationEndpoint
}

export interface RunNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  browseEndpoint?: NavigationEndpointBrowseEndpoint
}

export interface NavigationEndpointBrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface CompactVideoRendererMenu {
  menuRenderer?: PurpleMenuRenderer
}

export interface PurpleMenuRenderer {
  items?: MenuRendererItem[]
  trackingParams?: string
  accessibility?: DisabledAccessibilityData
}

export interface MenuRendererItem {
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

export interface MenuServiceItemRenderer {
  text?: Title
  serviceEndpoint?: MenuServiceItemRendererServiceEndpoint
  trackingParams?: string
}

export interface MenuServiceItemRendererServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  playlistEditEndpoint?: PlaylistEditEndpoint
  feedbackEndpoint?: FeedbackEndpoint
}

export interface ServiceEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: string
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
  buttons?: NotificationMultiActionRendererButton[]
  trackingParams?: string
}

export interface NotificationMultiActionRendererButton {
  buttonRenderer?: PurpleButtonRenderer
}

export interface PurpleButtonRenderer {
  style?: ButtonRendererStyle
  text?: Title
  serviceEndpoint?: PurpleServiceEndpoint
  trackingParams?: string
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  undoFeedbackEndpoint?: UndoFeedbackEndpoint
}

export interface UndoFeedbackEndpoint {
  undoToken?: string
  actions?: UndoFeedbackEndpointAction[]
}

export interface UndoFeedbackEndpointAction {
  clickTrackingParams?: string
  undoFeedbackAction?: CompanionSlotRenderer
}

export interface CompanionSlotRenderer {
  hack?: boolean
}

export enum ButtonRendererStyle {
  StyleBlueText = 'STYLE_BLUE_TEXT'
}

export interface UIActions {
  hideEnclosingContainer?: boolean
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

export interface Endpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: WatchEndpoint
}

export interface WatchEndpoint {
  videoId?: VideoID
}

export interface CompactVideoRendererThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text?: ShortViewCountText
  style?: ThumbnailOverlayTimeStatusRendererStyle
}

export enum ThumbnailOverlayTimeStatusRendererStyle {
  Default = 'DEFAULT'
}

export interface SingleColumnWatchNextResultsResults {
  results?: ResultsResults
}

export interface ResultsResults {
  contents?: ResultsContent[]
  continuations?: Continuation[]
  trackingParams?: string
}

export interface ResultsContent {
  companionSlotRenderer?: CompanionSlotRenderer
  slimVideoMetadataSectionRenderer?: SlimVideoMetadataSectionRenderer
  itemSectionRenderer?: PurpleItemSectionRenderer
}

export interface PurpleItemSectionRenderer {
  contents?: PurpleContent[]
  trackingParams?: string
  sectionIdentifier?: string
  targetId?: string
}

export interface PurpleContent {
  commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer
  compactAutoplayRenderer?: CompactAutoplayRenderer
  videoWithContextRenderer?: FluffyVideoWithContextRenderer
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface CommentsEntryPointHeaderRenderer {
  headerText?: HeaderText
  onTap?: Command
  trackingParams?: string
}

export interface HeaderText {
  runs?: HeaderTextRun[]
}

export interface HeaderTextRun {
  text?: string
  bold?: boolean
}

export interface Command {
  clickTrackingParams?: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
}

export interface ChangeEngagementPanelVisibilityAction {
  targetId?: string
  visibility?: string
}

export interface CompactAutoplayRenderer {
  title?: Title
  toggleDescription?: Title
  infoIcon?: IconImage
  infoText?: Title
  contents?: CompactAutoplayRendererContent[]
  trackingParams?: string
}

export interface CompactAutoplayRendererContent {
  videoWithContextRenderer?: PurpleVideoWithContextRenderer
}

export interface PurpleVideoWithContextRenderer {
  headline?: ShortViewCountText
  thumbnail?: BackgroundClass
  shortBylineText?: Byline
  lengthText?: ShortViewCountText
  shortViewCountText?: ShortViewCountText
  navigationEndpoint?: Endpoint
  menu?: CompactVideoRendererMenu
  isWatched?: boolean
  trackingParams?: string
  videoId?: VideoID
  thumbnailOverlays?: CompactVideoRendererThumbnailOverlay[]
  channelThumbnail?: ChannelThumbnail
  accessibility?: DisabledAccessibilityData
}

export interface ChannelThumbnail {
  channelThumbnailWithLinkRenderer?: ChannelThumbnailWithLinkRenderer
}

export interface ChannelThumbnailWithLinkRenderer {
  thumbnail?: BackgroundClass
  navigationEndpoint?: RunNavigationEndpoint
  accessibility?: DisabledAccessibilityData
}

export interface IconImage {
  iconType?: string
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

export interface FluffyVideoWithContextRenderer {
  headline?: ShortViewCountText
  thumbnail?: BackgroundClass
  shortBylineText?: Byline
  lengthText?: ShortViewCountText
  shortViewCountText?: ShortViewCountText
  navigationEndpoint?: VideoWithContextRendererNavigationEndpoint
  menu?: PurpleMenu
  isWatched?: boolean
  trackingParams?: string
  videoId?: string
  thumbnailOverlays?: PurpleThumbnailOverlay[]
  channelThumbnail?: ChannelThumbnail
  accessibility?: DisabledAccessibilityData
}

export interface PurpleMenu {
  menuRenderer?: FluffyMenuRenderer
}

export interface FluffyMenuRenderer {
  items?: MenuRendererItem[]
  trackingParams?: string
  accessibility?: DisabledAccessibilityData
  targetId?: string
}

export interface VideoWithContextRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  watchEndpoint?: PurpleWatchEndpoint
}

export interface PurpleWatchEndpoint {
  videoId?: string
  startTimeSeconds?: number
}

export interface PurpleThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer
}

export interface ThumbnailOverlayResumePlaybackRenderer {
  percentDurationWatched?: number
}

export interface SlimVideoMetadataSectionRenderer {
  contents?: SlimVideoMetadataSectionRendererContent[]
  videoId?: VideoID
  trackingParams?: string
}

export interface SlimVideoMetadataSectionRendererContent {
  slimVideoInformationRenderer?: SlimVideoInformationRenderer
  slimVideoActionBarRenderer?: SlimVideoActionBarRenderer
  slimOwnerRenderer?: SlimOwnerRenderer
}

export interface SlimOwnerRenderer {
  thumbnail?: BackgroundClass
  title?: Byline
  navigationEndpoint?: RunNavigationEndpoint
  subscribeButton?: SubscribeButton
  collapsedSubtitle?: ShortViewCountText
  expandedSubtitle?: ShortViewCountText
  channelName?: string
  channelUrl?: string
  trackingParams?: string
}

export interface SubscribeButton {
  subscribeButtonRenderer?: SubscribeButtonRenderer
}

export interface SubscribeButtonRenderer {
  buttonText?: Title
  subscriberCountText?: ShortViewCountText
  subscribed?: boolean
  enabled?: boolean
  type?: string
  channelId?: string
  showPreferences?: boolean
  subscriberCountWithSubscribeText?: ShortViewCountText
  subscribedButtonText?: Title
  unsubscribedButtonText?: Title
  trackingParams?: string
  unsubscribeButtonText?: Title
  longSubscriberCountText?: ShortViewCountText
  shortSubscriberCountText?: ShortViewCountText
  subscribeAccessibility?: DisabledAccessibilityData
  unsubscribeAccessibility?: DisabledAccessibilityData
  targetId?: string
  onSubscribeEndpoints?: OnSubscribeEndpoint[]
  onUnsubscribeEndpoints?: OnUnsubscribeEndpoint[]
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
  dialogMessages?: Title[]
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
  text?: Title
  accessibility?: AccessibilityData
  trackingParams?: string
  serviceEndpoint?: FluffyServiceEndpoint
  icon?: IconImage
  navigationEndpoint?: Endpoint
}

export interface FluffyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  unsubscribeEndpoint?: SubscribeEndpoint
}

export interface SlimVideoActionBarRenderer {
  buttons?: SlimVideoActionBarRendererButton[]
  overflowMenuText?: Title
  trackingParams?: string
  overflowAccessibilityData?: AccessibilityData
}

export interface SlimVideoActionBarRendererButton {
  slimMetadataToggleButtonRenderer?: SlimMetadataToggleButtonRenderer
  slimMetadataButtonRenderer?: SlimMetadataButtonRenderer
}

export interface SlimMetadataButtonRenderer {
  button?: SlimMetadataButtonRendererButton
}

export interface SlimMetadataButtonRendererButton {
  buttonRenderer?: FluffyButtonRenderer
}

export interface FluffyButtonRenderer {
  style?: string
  size?: string
  isDisabled?: boolean
  text?: Title
  icon?: IconImage
  navigationEndpoint?: ButtonRendererNavigationEndpoint
  tooltip?: string
  trackingParams?: string
  targetId?: string
  serviceEndpoint?: TentacledServiceEndpoint
  accessibility?: AccessibilityData
  accessibilityData?: DisabledAccessibilityData
}

export interface ButtonRendererNavigationEndpoint {
  clickTrackingParams?: string
  shareEndpoint?: ShareEndpoint
}

export interface ShareEndpoint {
  serializedShareEntity?: string
}

export interface TentacledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  addToPlaylistServiceEndpoint?: WatchEndpoint
  getReportFormEndpoint?: GetReportFormEndpoint
}

export interface GetReportFormEndpoint {
  params?: string
}

export interface SlimMetadataToggleButtonRenderer {
  target?: WatchEndpoint
  isLike?: boolean
  button?: SlimMetadataToggleButtonRendererButton
  isDislike?: boolean
}

export interface SlimMetadataToggleButtonRendererButton {
  toggleButtonRenderer?: ToggleButtonRenderer
}

export interface ToggleButtonRenderer {
  style?: StyleClass
  isToggled?: boolean
  isDisabled?: boolean
  defaultIcon?: IconImage
  defaultText?: ShortViewCountText
  defaultServiceEndpoint?: DefaultServiceEndpoint
  toggledText?: ShortViewCountText
  toggledServiceEndpoint?: ToggledServiceEndpoint
  accessibility?: AccessibilityData
  trackingParams?: string
  defaultTooltip?: string
  toggledTooltip?: string
  toggledStyle?: StyleClass
  accessibilityData?: DisabledAccessibilityData
  targetId?: string
}

export interface DefaultServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  likeEndpoint?: DefaultServiceEndpointLikeEndpoint
}

export interface DefaultServiceEndpointLikeEndpoint {
  status?: string
  target?: WatchEndpoint
  likeParams?: string
  dislikeParams?: string
}

export interface StyleClass {
  styleType?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  likeEndpoint?: ToggledServiceEndpointLikeEndpoint
}

export interface ToggledServiceEndpointLikeEndpoint {
  status?: string
  target?: WatchEndpoint
  removeLikeParams?: string
}

export interface SlimVideoInformationRenderer {
  title?: Title
  collapsedSubtitle?: ShortViewCountText
  expandedSubtitle?: Title
  trackingParams?: string
  onClickCommand?: OnClickCommand
}

export interface OnClickCommand {
  clickTrackingParams?: string
  showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint
}

export interface ShowEngagementPanelEndpoint {
  panelIdentifier?: string
  forcePortrait?: boolean
}

export interface Continuation {
  reloadContinuationData?: ReloadContinuationData
}

export interface ReloadContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface EngagementPanel {
  engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer
}

export interface EngagementPanelSectionListRenderer {
  panelIdentifier?: string
  header?: Header
  content?: EngagementPanelSectionListRendererContent
  veType?: number
  visibility?: string
  loggingDirectives?: LoggingDirectives
}

export interface EngagementPanelSectionListRendererContent {
  structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: SectionListRendererContent[]
  trackingParams?: string
}

export interface SectionListRendererContent {
  itemSectionRenderer?: FluffyItemSectionRenderer
}

export interface FluffyItemSectionRenderer {
  contents?: FluffyContent[]
  trackingParams?: string
  sectionIdentifier?: string
  targetId?: string
}

export interface FluffyContent {
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface StructuredDescriptionContentRenderer {
  items?: StructuredDescriptionContentRendererItem[]
}

export interface StructuredDescriptionContentRendererItem {
  videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer
  expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer
}

export interface ExpandableVideoDescriptionBodyRenderer {
  [x: string]: any
}

export interface VideoDescriptionHeaderRenderer {
  title?: Title
  channel?: Title
  views?: Title
  publishDate?: Title
}

export interface Header {
  engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
}

export interface EngagementPanelTitleHeaderRenderer {
  title?: Title
  visibilityButton?: VisibilityButton
  trackingParams?: string
  contextualInfo?: Title
}

export interface VisibilityButton {
  buttonRenderer?: VisibilityButtonButtonRenderer
}

export interface VisibilityButtonButtonRenderer {
  icon?: IconImage
  trackingParams?: string
  accessibilityData?: DisabledAccessibilityData
  command?: Command
  style?: string
  size?: string
}

export interface LoggingDirectives {
  trackingParams?: string
  visibility?: Visibility
}

export interface Visibility {
  types?: string
}

export interface PlayerOverlays {
  playerOverlayRenderer?: PlayerOverlayRenderer
}

export interface PlayerOverlayRenderer {
  autoplay?: PlayerOverlayRendererAutoplay
  videoDetails?: PlayerOverlayRendererVideoDetails
  autonavToggle?: AutonavToggle
}

export interface AutonavToggle {
  autoplaySwitchButtonRenderer?: AutoplaySwitchButtonRenderer
}

export interface AutoplaySwitchButtonRenderer {
  enabledEduCommand?: AbledEduCommand
  disabledEduCommand?: AbledEduCommand
  enabledAccessibilityData?: DisabledAccessibilityData
  disabledAccessibilityData?: DisabledAccessibilityData
  trackingParams?: string
}

export interface AbledEduCommand {
  clickTrackingParams?: string
  playerToastCommand?: PlayerToastCommand
}

export interface PlayerToastCommand {
  text?: Title
  durationMs?: number
}

export interface PlayerOverlayRendererAutoplay {
  playerOverlayAutoplayRenderer?: PlayerOverlayAutoplayRenderer
}

export interface PlayerOverlayAutoplayRenderer {
  title?: Title
  videoTitle?: ShortViewCountText
  byline?: Byline
  pauseText?: Title
  background?: BackgroundClass
  countDownSecs?: number
  cancelButton?: Button
  nextButton?: Button
  trackingParams?: string
  closeButton?: Button
  thumbnailOverlays?: CompactVideoRendererThumbnailOverlay[]
  preferImmediateRedirect?: boolean
  videoId?: VideoID
  shortViewCountText?: ShortViewCountText
}

export interface PlayerOverlayRendererVideoDetails {
  playerOverlayVideoDetailsRenderer?: PlayerOverlayVideoDetailsRenderer
}

export interface PlayerOverlayVideoDetailsRenderer {
  title?: Title
  subtitle?: Title
}

export interface ResponseResponseContext {
  serviceTrackingParams?: ServiceTrackingParam[]
  webResponseContextExtensionData?: FluffyWebResponseContextExtensionData
}

export interface FluffyWebResponseContextExtensionData {
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
  commandMetadata?: AutoplayVideoCommandMetadata
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
  tooltipText?: Title
  endpoint?: EndpointClass
  trackingParams?: string
  overrideEntityKey?: string
}

export interface EndpointClass {
  clickTrackingParams?: string
  commandMetadata?: AutoplayVideoCommandMetadata
  browseEndpoint?: EndpointBrowseEndpoint
}

export interface EndpointBrowseEndpoint {
  browseId?: string
}

export interface Timing {
  info?: Info
}

export interface Info {
  st?: number
}
