import { memo, useMemo } from "react"
// components
import QuestionQAComment from "./QuestionQAComment"
// components/UI
import Avatar from "../UI/Avatar"
import { useRouter } from "next/router"



type QuestionAProps = {
    answer: any
}



const QuestionA = ({ 
    answer 
}: QuestionAProps) => {


    const comments = useMemo(() => {
        if (answer?.comments?.length > 0) {
            return (
                <div className="flex flex-col mt-[15px] pt-[15px] border-t-[1px] border-[hsl(0, 0%, 90%)]">
                    {answer.comments.map((comment: any) => (
                        <QuestionQAComment 
                            key={comment.id} 
                            comment={comment} 
                        />
                    ))}
                </div>
            )
        }
    }, [answer?.comments])

    const router = useRouter()



    return (
        <div className="shadow-standart first:mt-0 mt-[80px] rounded-[10px] w-full h-auto p-[20px] bg-white">
            <div className="flex item-center justify-between">
                <div className="flex">
                    <Avatar
                        onClick={() => router.push(`/profile/${answer?.authorId}`)}
                        width={35}
                        height={35}
                        src={answer?.author?.image}
                        className="cursor-pointer"
                    />
                    <div className="flex font-montserrat flex-col ml-[10px] justify-center leading-[16px] text-[15px] sm:text-[16px]">
                        <span className="text-[#232323] font-semibold">
                            Misha Poleshchenkov
                        </span>
                        <div className="flex">
                            <span className="text-[#494949] font-medium">
                                день назад
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[13px] pr-[5px] pl-[5px] text-[16px] sm:text-[18px] font-sans font-medium">
                <p dangerouslySetInnerHTML={{ __html: answer?.textHtml }}>

                </p>
            </div>
            {comments}
        </div>
    )
}

export default memo(QuestionA)