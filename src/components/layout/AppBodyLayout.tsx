interface AppBodyProps {
  children: React.ReactNode;
}

const AppBodyLayout = ({ children }: AppBodyProps) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen min-w-80 p-6 bg-body-color ">
      <div className="w-full max-w-md h-[667px] bg-main-color rounded-md shadow-container-shadow overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AppBodyLayout;
