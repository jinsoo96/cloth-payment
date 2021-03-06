import React, { useEffect} from 'react';


const Payment = () => {
    const { IMP } = window;
    IMP.init('imp08843501'); // 'imp00000000'

    function onClickPayment() {
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init('imp08843501');
    
        /* 2. 결제 데이터 정의하기 */
        const data = {
          pg: 'html5_inicis',                           // PG사
          pay_method: 'card',                           // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
          amount: 1000,                                 // 결제금액
          name: '상품주문',                  // 주문명
          buyer_name: '김진수',                           // 구매자 이름
          buyer_tel: null,                     // 구매자 전화번호
          buyer_email: 'xorbdla@naver.com',               // 구매자 이메일
          buyer_addr: null,                    // 구매자 주소
          buyer_postcode: null,                      // 구매자 우편번호
        };
    
        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
      }

      function callback(response) {
        const {
          success,
          merchant_uid,
          error_msg,
        } = response;
    
        if (success) {
          alert('결제 성공');
        } else {
          alert(`결제 실패: ${error_msg}`);
        }
      }
    

    return (
        <>
		    <button onClick={onClickPayment}>결제하기</button>
        </>
    );

}
export default Payment;