import React from 'react'
import { ShareBarStrings } from '../Strings/Strings'

const { TWITTER } = ShareBarStrings
const ShareBar = () => (
  <div className="flex items-center justify-around py-6 ">
    <div className="fb-like" data-href="https://robertandmandi.wedding/" data-width="50" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true" />
    <a href="https://twitter.com/intent/tweet?button_hashtag=RobertandMandiWedding&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">{TWITTER}</a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
  </div>
)

export default ShareBar
