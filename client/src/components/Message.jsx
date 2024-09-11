import { IoCheckmarkDone } from "react-icons/io5";
import { formatText } from "../utils/formatText";

export default function Message({ sender, message, time, isMe }) {


  // i want to convert "*bold*" to <strong>bold</strong>
  // i want to convert "_italic_" to <em>italic</em>
  // i want to convert "`code`" to <code>code</code>
  // i want to convert "```code```" to <pre>code</pre>
  // i want to convert "~~strike~~" to <strike>strike</strike>




  const formattedMessage = formatText(message)
  return (
    <div className={"px-3 my-[0.125rem] w-full flex " + (isMe ? 'justify-end' : '')}>
      <div className={"p-2 w-max max-w-[80%] rounded-xl " + (isMe ? 'bg-teaGreen' : 'bg-secondary')}>
        <p className="flex-wrap inline-flex justify-end items-end gap-1 text-start"><span dangerouslySetInnerHTML={{ __html: formattedMessage }}></span><span className="inline-flex gap-1 items-end"><span className="text-disabled text-xs text-end">{time}</span>{isMe && <IoCheckmarkDone className="text-checkmark text-xl" />}</span></p>
      </div>
    </div>
  )
}