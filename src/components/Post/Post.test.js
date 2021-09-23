import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Post from "./Post";

const resdata = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  comments: [
    {
      name: "User",
      email: "abc@gmail.com",
      body: "Hello",
    },
  ],
};

it("should render first post and check if title appears", () => {
  const { getByText } = render(
    <Post post={resdata} activatedComments={false} />
  );
  expect(
    getByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  ).toBeInTheDocument();
});

it("should check if a comment exists when comment is activated.", () => {
  const { getByText } = render(
    <Post post={resdata} activatedComments={true} />
  );
  expect(getByText("Hello")).toBeInTheDocument();
});

it("should check comment does not exist if comments are not activated.", () => {
  const { queryByText } = render(
    <Post post={resdata} activatedComments={false} />
  );
  expect(queryByText("Hello")).toBeNull();
});
