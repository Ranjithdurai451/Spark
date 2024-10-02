type UserData = {
  username: string;
  date: string;
};

type DataItem = {
  id: number;
  feedback: string;
  user: UserData[];
  isShowOnMobile: boolean;
};
type TestimonyItemProps = {
  data: DataItem;
};
export const TestimonyItem: React.FC<TestimonyItemProps> = ({ data }) => (
  <div
    className={`flex flex-col  gap-3 p-6 md:gap-5 md:p-8 bg-black bg-opacity-75 animate-testi ${
      !data?.isShowOnMobile ? 'hidden sm:flex' : ''
    }`}
  >
    <div className="text-justify  md:text-[16px] text-[14px] text-white">
      {data.feedback}
    </div>
    <div className="flex gap-[15px] ">
      <img
        src="/client.png"
        className="h-[32px] w-[32px] rounded-full"
        alt=""
        width={32}
        height={32}
      />
      <div className="">
        <p className="md:text-[16px] text-[14px] text-white">
          {data.user[0].username}
        </p>
        <p className=" text-white md:text-[12px] text-[10px] ">
          {data.user[0].date}
        </p>
      </div>
    </div>
  </div>
);
