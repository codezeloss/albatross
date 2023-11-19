export const getAllTasks = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/${userId}/tasks`,
      { cache: "no-cache" }
    );

    if (response.ok) return await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};
