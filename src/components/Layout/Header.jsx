import { useNavigate, useLocation } from "react-router-dom";
import OpenColor from "open-color";
import { SiNetflix } from "react-icons/si";
import { IoLanguageOutline } from "react-icons/io5";
import { useEffect } from "react";
import { user } from "../../assets/fakebase";
import { Button } from "../ui/Button";

const Header = () => {
  const navi = useNavigate();

  //  중괄호에 바로 써도 된다
  const { pathname } = useLocation();
  //  const pathname = locaction.pathname

  const onL = () => {
    navi("/login ");
  };

  const onT = () => {
    navi("/ ");
  };

  //1.확인용
  //클릭하거나, 동작하지 않을 때에더 확인하고 싶을때

  useEffect(
    () => {
      console.log(pathname);
      if (pathname === "/login") {
      }
    },
    [pathname] // []dependency 의존성
  );

  return (
    <header
      className="flex justify-between items-center fixed top-0 left-0 w-full text-gray-100 z-50 bg-gray-900"
      style={{
        borderBottom: `1px solid ${OpenColor.gray[7]}`,
        height: "auto",
        paddingRight: 10,
      }}
    >
      <div>
        <Button
          className="h-10 px-2.5 text-xl text-red-600"
          style={{
            fontSize: 20,
            color: OpenColor.red[8],
            padding: "20px 10px",
            height: "Auto",
          }}
          onClick={onT}
        >
          <SiNetflix />
        </Button>
      </div>
      <div>
        <ul
          className="flex gap-x-2.5"
          style={{ display: "flex", columnGap: 10, alignItems: "center" }}
        >
          <li>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                border: " 1px solid",
                borderRadius: 4,
                fontSize: ".75rem",
              }}
            >
              <IoLanguageOutline />
              언어
            </button>
          </li>
          {/* 조건 && 연산자 === 앞의  조건에 부합할 때 실행할 코드를 && 오른편에 적어준다 */}
          {/* 조건 ?: 연산자 === 앞의  조건에 부합할 때 ?  부합하지 않을 때 : 오른편에 적어준다 */}
          {(pathname !== "/login" || (!user && pathname !== "/login")) && (
            <li>
              <Button
                style={{
                  background: OpenColor.red[7],
                  fontSize: ".75rem",
                }}
                onClick={onL}
              >
                로그인
              </Button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
