interface AppBodyProps {
  children: React.ReactNode;
}

const AppBodyLayout = ({ children }: AppBodyProps) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen min-w-80 p-6 bg-body ">
      <div className="w-full max-w-md bg-main rounded-md shadow-container-shadow overflow-hidden">{children}</div>
    </div>
  );
};

export default AppBodyLayout;
