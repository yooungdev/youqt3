import { memo } from "react"
// components/UI
import Avatar from "../UI/Avatar"
import Button from "../UI/Button"

type ProfileInfoProps = {
    profile: any
}


const ProfileInfo = ({
    profile
}: ProfileInfoProps) => {
    return (
        <div className="shadow-standart rounded-[10px] flex flex-col justify-between p-[20px] bg-white">
            <div className="flex w-full">
                <Avatar
                    height={43}
                    width={43}
                    src={profile?.image}
                />
                <div className="pl-[10px] font-montserrat flex flex-col leading-[18px] justify-center">
                    <span className="text-16px sm:text-[17px] font-semibold">
                        Misha Poleshchenkov
                    </span>
                    <span className="text-16px sm:text-[17px] text-[#494949] font-medium">
                        Новичок
                    </span>
                </div>
            </div>
            <Button className="w-full hover:bg-[#E4E4FB] text-[#4971FF] font-nunito text-[17px] font-bold py-[3px] px-[6px] cursor-pointer rounded-[10px] bg-[#E8F1FF] border-none outline-none mt-[15px]">
                Редактировать
            </Button>
            <div className="pt-[20px] w-full">
                <span className="text-[16px] font-montserrat font-semibold">
                    Информация
                </span>
                <div className="w-full h-[1px] my-[8px] bg-[#e6e6e6]" />
                <div>
                    <div>
                        role
                    </div>
                    <div>
                        rating
                    </div>
                    <div>
                        created at account
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ProfileInfo)