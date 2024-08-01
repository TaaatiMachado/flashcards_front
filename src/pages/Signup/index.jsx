import SignupForm from '../../components/SignupForm';

const Signup = () => {
  return (
    <div className="ml-[305px] max-w-[1440px] p-8 h-dvh py-12 mx-20 flex justify-center items-center flex-col text-dark-background dark:text-light-secondary bg-light-background dark:bg-dark-background overflow-hidden">
      <SignupForm />
    </div>
  );
};

export default Signup;
