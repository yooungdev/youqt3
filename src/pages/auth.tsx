import type { NextPage } from "next"
import Button from "../components/UI/Button"
// layouts
import PageContainer from "../layouts/PageContainer"


const Auth: NextPage = () => {
    return (
        <PageContainer>
            <div className="w-full h-full flex  items-center justify-center">
                <div className="shadow-standart flex rounded-[10px] w-[700px] p-[12px] sm:p-[20px] bg-white">
                    <div className="w-[50%] hidden sm:flex items-center justify-center flex-col">
                        <span className="font-[900] font-nunito text-[3em] text-[#4971FF]">
                            YouQ
                        </span>
                        <span className="text-[#2e5af9] font-montserrat text-[18px] font-semibold">
                            вопрос - ответ
                        </span>
                    </div>
                    <div className="w-[100%] sm:w-[50%] flex flex-col">
                        <div className="text-[#172b4d] text-[22px] font-montserrat font-semibold">
                            <span>
                                Авторизация
                            </span>
                        </div>
                        <form className="p-[10px] w-full flex flex-col">
                            <input 

                            />
                            <input 
                            
                            />
                            <Button 
                                type="submit"
                                className="border-none outline-none cursor-pointer py-[5px] px-[10px] mt-[20px] font-semibold text-white text-[16px] rounded-[10px] bg-[#2684ff] hover:bg-[#4971FF]"
                            >
                                Войти
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}


export default Auth