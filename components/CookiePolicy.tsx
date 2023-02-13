/* const CookiePolicyWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 100;
    position: relative;
    display: flex;
    justify-content: center;
`

const div = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    padding: 25px 20px 10px 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #396e34;
    align-items:center;
`
const CookieButton = styled.div`
    padding: 7px 22px;
    border: 1px solid #fcfcfc;
    margin-top: 15px;
    display: flex;
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #fcfcfc;
        color: #333;
    }
`

const div = styled.div`
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
` */

const CookiePolicy = (props: any) => {
  return (
    <section>
      <div>
        <div></div>
        <button onClick={() => props.setLocalStorage()}>OK</button>
      </div>
    </section>
  );
};

export default CookiePolicy;
