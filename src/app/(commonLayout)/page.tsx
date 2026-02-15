
import { userService } from "@/services/user.service";

export default async function Home() {
  const {data} = await userService.getSession();

  console.log(data);
  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  );
}
