import { useRouter } from "next/router"
import { useEffect } from "react"
//
import { itemsOptionsObject, classesOptionsObject } from "../../utils/helping"
import { trpc } from "../../utils/trpc"



const QuestionsNew = () => {

    const newQuestionsMutate = trpc.useMutation(['question.getAll'])


    useEffect(() => {
        try {
            newQuestionsMutate.mutate({
            limit: 4
          })
        } catch (error) {
          
        }
      }, [])


    return (
        <div className="flex flex-col">
            <span className="font-semibold font-montserrat text-[18px] text-[#232323]">
                Новые вопросы
            </span>
            <div className="pt-[30px]">
                {newQuestionsMutate?.data?.map(newQuestion => (
                    <QuestionNew newQuestion={newQuestion} />
                ))}
            </div>
        </div>
    )
}


export default QuestionsNew




type QuestionNewProps = {
    newQuestion: any
}
const QuestionNew = ({
    newQuestion
}: QuestionNewProps) => {


    const router = useRouter()


    return (
        <div className="hover:shadow-standart flex flex-col text-center text-[rgb(9 21 38 / 85%)] text-[16px] font-medium rounded-[15px] py-[10px] px-[20px]">
            <div className="font-nunito">
                <span className="text-[17px]">
                    {itemsOptionsObject[newQuestion?.item]}
                </span>
                <span className="text-[#7f7f7f] ml-[15px] text-[17px]">
                    {classesOptionsObject[newQuestion?.class]}
                </span>
            </div>
            <p
                onClick={() => router.push(`/question/${newQuestion.id}`)}
                style={{
                    overflowWrap: 'anywhere',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                }}
                className="hover:underline  font-nunito text-[17px] cursor-pointer font-semibold"
            >
                {newQuestion?.text}
            </p>
            <span className="text-[#7f7f7f] font-nunito text-[17px]">
                createdat
            </span>
        </div>
    )
}