import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "../ui/input";
import background from "/src/assets/nanoplastic.png";

function LoginScreen() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="my-10 bg-white">Welcome to MICROPLASTIC CALCULATOR</h1>
      <div>
        <Drawer>
          <DrawerTrigger>
            <Button className="mx-5">Login</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Enter Username and Password</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <div className=" flex-column">
              <Input className="my-4" placeholder="username" />
              <Input placeholder="password" />
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <Button>SignIn</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Sign in with username and password</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default LoginScreen;
