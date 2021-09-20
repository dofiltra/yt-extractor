export interface IYtCommentsResponse {
  responseContext?: ResponseContext
  trackingParams?: string
  onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]
}

export interface OnResponseReceivedEndpoint {
  clickTrackingParams?: string
  reloadContinuationItemsCommand?: ReloadContinuationItemsCommand
}

export interface ReloadContinuationItemsCommand {
  targetId?: string
  continuationItems?: ContinuationItem[]
  slot?: string
}

export interface ContinuationItem {
  commentsHeaderRenderer?: CommentsHeaderRenderer
  commentThreadRenderer?: CommentThreadRenderer
}

export interface CommentThreadRenderer {
  comment?: Comment
  trackingParams?: string
  renderingPriority?: RenderingPriority
  isModeratedElqComment?: boolean
  loggingDirectives?: LoggingDirectives
  replies?: Replies
}

export interface Comment {
  commentRenderer?: CommentRenderer
}

export interface CommentRenderer {
  authorText?: Text
  authorThumbnail?: OrThumbnail
  authorEndpoint?: AuthorEndpoint
  contentText?: ContentText
  publishedTimeText?: Text
  isLiked?: boolean
  actionMenu?: ActionMenu
  commentId?: string
  authorIsChannelOwner?: boolean
  voteStatus?: VoteStatus
  trackingParams?: string
  voteCount?: Count
  expandButton?: Button
  creatorHeart?: CreatorHeart
  accessibilityData?: AccessibilityData
  loggingDirectives?: LoggingDirectives
  replyCount?: number
  repliesCount?: Count
}

export interface AccessibilityData {
  accessibilityData?: Accessibility
}

export interface Accessibility {
  label?: string
}

export interface ActionMenu {
  menuRenderer?: MenuRenderer
}

export interface MenuRenderer {
  items?: Item[]
  trackingParams?: string
  accessibility?: AccessibilityData
}

export interface Item {
  menuNavigationItemRenderer?: MenuItemRenderer
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
  menuServiceItemRenderer?: MenuItemRenderer
}

export interface MenuItemRenderer {
  text?: Text
  icon?: Icon
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint
  trackingParams?: string
  serviceEndpoint?: MenuNavigationItemRendererServiceEndpoint
}

export interface Icon {
  iconType?: IconType
}

export enum IconType {
  Comment = 'COMMENT',
  FullHeart = 'FULL_HEART',
  ReportProblem = 'REPORT_PROBLEM'
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: PurpleCommandMetadata
  createCommentReplyDialogEndpoint?: CreateCommentReplyDialogEndpoint
}

export interface PurpleCommandMetadata {
  webCommandMetadata?: PurpleWebCommandMetadata
}

export interface PurpleWebCommandMetadata {
  ignoreNavigation?: boolean
}

export interface CreateCommentReplyDialogEndpoint {
  dialog?: CreateCommentReplyDialogEndpointDialog
}

export interface CreateCommentReplyDialogEndpointDialog {
  commentReplyDialogRenderer?: CommentReplyDialogRenderer
}

export interface CommentReplyDialogRenderer {
  replyButton?: Button
  cancelButton?: CancelButton
  authorThumbnail?: OrThumbnail
  placeholderText?: Text
  aadcGuidelinesStateEntityKey?: AadcGuidelinesStateEntityKey
}

export enum AadcGuidelinesStateEntityKey {
  EgwzMTAzMTM4Nzk0MDEgmQIoAQ3D3D = 'EgwzMTAzMTM4Nzk0MDEgmQIoAQ%3D%3D'
}

export interface OrThumbnail {
  thumbnails?: Thumbnail[]
  accessibility?: AccessibilityData
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface CancelButton {
  buttonRenderer?: CancelButtonButtonRenderer
}

export interface CancelButtonButtonRenderer {
  text?: Text
  trackingParams?: string
}

export interface Text {
  runs?: AuthorTextRun[]
}

export interface AuthorTextRun {
  text?: string
}

export interface Button {
  buttonRenderer?: ExpandButtonButtonRenderer
}

export interface ExpandButtonButtonRenderer {
  style?: Style
  size?: Size
  text?: Text
  serviceEndpoint?: PurpleServiceEndpoint
  trackingParams?: string
  accessibility?: Accessibility
}

export interface PurpleServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  createCommentReplyEndpoint?: CreateCommentReplyEndpoint
}

export interface ServiceEndpointCommandMetadata {
  webCommandMetadata?: FluffyWebCommandMetadata
}

export interface FluffyWebCommandMetadata {
  sendPost?: boolean
  apiUrl?: PurpleAPIURL
}

export enum PurpleAPIURL {
  YoutubeiV1CommentCreateComment = '/youtubei/v1/comment/create_comment',
  YoutubeiV1CommentCreateCommentReply = '/youtubei/v1/comment/create_comment_reply',
  YoutubeiV1CommentPerformCommentAction = '/youtubei/v1/comment/perform_comment_action',
  YoutubeiV1FlagGetForm = '/youtubei/v1/flag/get_form',
  YoutubeiV1Next = '/youtubei/v1/next'
}

export interface CreateCommentReplyEndpoint {
  createReplyParams?: string
}

export enum Size {
  SizeDefault = 'SIZE_DEFAULT'
}

export enum Style {
  StylePrimary = 'STYLE_PRIMARY',
  StyleText = 'STYLE_TEXT'
}

export interface MenuNavigationItemRendererServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  getReportFormEndpoint?: GetReportFormEndpoint
}

export interface GetReportFormEndpoint {
  params?: string
}

export interface ToggleMenuServiceItemRenderer {
  defaultText?: Text
  defaultServiceEndpoint?: ServiceEndpoint
  toggledText?: Text
  toggledServiceEndpoint?: ServiceEndpoint
  trackingParams?: string
  isToggled?: boolean
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  performCommentActionEndpoint?: PerformCommentActionEndpoint
}

export interface PerformCommentActionEndpoint {
  action?: string
  clientActions?: ClientAction[]
}

export interface ClientAction {
  clickTrackingParams?: string
  updateCommentVoteAction?: UpdateCommentVoteAction
}

export interface UpdateCommentVoteAction {
  voteCount?: Count
  voteStatus?: VoteStatus
}

export interface Count {
  runs?: AuthorTextRun[]
  accessibility?: AccessibilityData
}

export enum VoteStatus {
  Dislike = 'DISLIKE',
  Indifferent = 'INDIFFERENT',
  Like = 'LIKE'
}

export interface AuthorEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AuthorEndpointCommandMetadata
  browseEndpoint?: BrowseEndpoint
}

export interface BrowseEndpoint {
  browseId?: string
  canonicalBaseUrl?: string
}

export interface AuthorEndpointCommandMetadata {
  webCommandMetadata?: TentacledWebCommandMetadata
}

export interface TentacledWebCommandMetadata {
  url?: string
  webPageType?: WebPageType
  rootVe?: number
  apiUrl?: FluffyAPIURL
}

export enum FluffyAPIURL {
  YoutubeiV1Browse = '/youtubei/v1/browse'
}

export enum WebPageType {
  WebPageTypeChannel = 'WEB_PAGE_TYPE_CHANNEL',
  WebPageTypeWatch = 'WEB_PAGE_TYPE_WATCH'
}

export interface ContentText {
  runs?: ContentTextRun[]
}

export interface ContentTextRun {
  text?: string
  navigationEndpoint?: RunNavigationEndpoint
}

export interface RunNavigationEndpoint {
  clickTrackingParams?: string
  commandMetadata?: AuthorEndpointCommandMetadata
  watchEndpoint?: WatchEndpoint
}

export interface WatchEndpoint {
  videoId?: string
  startTimeSeconds?: number
}

export interface CreatorHeart {
  creatorHeartRenderer?: CreatorHeartRenderer
}

export interface CreatorHeartRenderer {
  creatorThumbnail?: OrThumbnail
  heartIcon?: Icon
  heartedTooltip?: HeartedTooltip
  isHearted?: boolean
  isEnabled?: boolean
  heartedAccessibility?: AccessibilityData
  kennedyHeartColorString?: KennedyHeartColorString
}

export enum HeartedTooltip {
  ОтАвтораКаналаINTERITUS = '❤ от автора канала "INTERITUS"'
}

export enum KennedyHeartColorString {
  Ff0000 = '#ff0000'
}

export interface LoggingDirectives {
  trackingParams?: string
  visibility?: Visibility
}

export interface Visibility {
  types?: string
}

export enum RenderingPriority {
  RenderingPriorityUnknown = 'RENDERING_PRIORITY_UNKNOWN'
}

export interface Replies {
  commentRepliesRenderer?: CommentRepliesRenderer
}

export interface CommentRepliesRenderer {
  contents?: Content[]
  trackingParams?: string
  targetId?: string
}

export interface Content {
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface ContinuationItemRenderer {
  button?: ButtonClass
}

export interface ButtonClass {
  buttonRenderer?: ButtonButtonRenderer
}

export interface ButtonButtonRenderer {
  text?: Text
  trackingParams?: string
  command?: Command
}

export interface Command {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  continuationCommand?: ContinuationCommand
}

export interface ContinuationCommand {
  token?: string
  request?: string
}

export interface CommentsHeaderRenderer {
  createRenderer?: CreateRenderer
  trackingParams?: string
}

export interface CreateRenderer {
  commentSimpleboxRenderer?: CommentSimpleboxRenderer
}

export interface CommentSimpleboxRenderer {
  authorThumbnail?: OrThumbnail
  placeholderText?: Text
  trackingParams?: string
  avatarSize?: string
  navigationEndpoint?: CommentSimpleboxRendererNavigationEndpoint
  aadcGuidelinesStateEntityKey?: AadcGuidelinesStateEntityKey
}

export interface CommentSimpleboxRendererNavigationEndpoint {
  clickTrackingParams?: string
  createCommentDialogEndpoint?: CreateCommentDialogEndpoint
}

export interface CreateCommentDialogEndpoint {
  dialog?: CreateCommentDialogEndpointDialog
}

export interface CreateCommentDialogEndpointDialog {
  commentDialogRenderer?: CommentDialogRenderer
}

export interface CommentDialogRenderer {
  authorThumbnail?: OrThumbnail
  submitButton?: SubmitButton
  cancelButton?: CancelButton
  placeholderText?: Text
}

export interface SubmitButton {
  buttonRenderer?: SubmitButtonButtonRenderer
}

export interface SubmitButtonButtonRenderer {
  text?: Text
  serviceEndpoint?: FluffyServiceEndpoint
  trackingParams?: string
}

export interface FluffyServiceEndpoint {
  clickTrackingParams?: string
  commandMetadata?: ServiceEndpointCommandMetadata
  createCommentEndpoint?: CreateCommentEndpoint
}

export interface CreateCommentEndpoint {
  createCommentParams?: string
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
  hasDecorated?: boolean
}
