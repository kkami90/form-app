import React from "react";

const commit = (props) => {
  const [user, setUser_s] = props;

  //1. 전개연산자
  //2. Computed property names(변수명를 동적으로 할수있게한다)
  function inputHandle(e) {
    setUser_s({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  }

  function submitUser(e) {
    //애가 새로고침 막아주네
    e.preventDefault();

    // let juser = JSON.stringify(user);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((mesage) => mesage.text())
      .then((mesage) => {
        console.log("응답", mesage);
        if (mesage === "ok") {
          alert("성공");
        } else alert("실패");
      });
  }

  function reset(e) {
    e.preventDefault();
    setUser_s({ title: "", rating: "", medium_cover_image: "" });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          value={user.title}
          name="title"
          placeholder="영화제목을 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          value={user.rating}
          name="rating"
          placeholder="점수를 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          value={user.medium_cover_image}
          name="medium_cover_image"
          placeholder="이미지주소를 입력하세요"
        />
        <br />
        <button onClick={submitUser}>등록</button>
        <button onClick={reset}>취소</button>
      </form>
    </div>
  );
};

export default commit;
