import * as React from "react"
// import * as styles from './tg-button.module.css';
import { BasicButton } from "../../../common/ui";

export default function TgButton(props) {
  return (
    <a target='_blank' href="https://t.me/trafflabcpa_bot">
      <BasicButton {...props}/>
    </a>
  )
}