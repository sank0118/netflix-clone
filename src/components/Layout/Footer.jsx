import React from "react";
import { fMenus } from "../../assets/fakebase";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import OpenColor from "open-color";

//<Link to={경로}>{이름}</Link>

const Footer = () => {
  return (
    <footer
      style={{
        background: OpenColor.gray[9],
        color: OpenColor.gray[0],
        padding: 10,
        rowGap: 20,
        alignItems: "center",
      }}
    >
      <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</p>

      <ul style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
        {fMenus.map((menu, index) => {
          return (
            <Link
              key={index}
              to={menu.path}
              style={{
                color: OpenColor.gray[5],
                textDecoration: "underline",
                fontSize: ".65rem",
              }}
            >
              {menu.name}
            </Link>
          );
        })}
      </ul>

      <Button style={{ border: "1px solid" }}>한국어</Button>
      <p>넷플릭스 대한민국</p>
      <p>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담) 대표:
        레지널드 숀 톰프슨 이메일 주소: korea@netflix.com 주소: 대한민국
        서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
        사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web Services Inc.
        공정거래위원회 웹사이트
      </p>
    </footer>
  );
};

export default Footer;
