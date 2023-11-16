function Spinner() {
  return (
    <div className="absolute top-0 right-0 h-screen w-full flex items-center justify-center z-50 bg-white dark:bg-black">
      <div className="w-20 h-20 rounded-full animate-spin border-8 border-dashed border-black dark:border-white border-t-transparent" />
    </div>
  );
}

export default Spinner;
