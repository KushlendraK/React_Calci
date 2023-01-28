import './style.css';
import img from './r2.jfif';
const Normal = () => {

    const backclear = () => {
        let val = document.getElementById('mytext').value;
        let value1 = val.slice(0, -1);
        document.getElementById('mytext').value = value1;
    }

    return (

        <>
            <div>

                <div class="p-5 col-4 " id="normal"   >
                    <h1 class="mx-5">Normal Calculator</h1>
                    <br />
                    <div id="calarea">
                        <input type="text" id="mytext" placeholder="0" />
                        <br />
                        <br />
                        <input type="button" id="b1" value="1"
                            onClick={() => document.getElementById('mytext').value += document.getElementById('b1').value} />
                        <input type="button" id="b2" value="2" onClick={() => document.getElementById('mytext').value += document.getElementById('b2').value} />
                        <input type="button" id="b3" value="3" onClick={() => document.getElementById('mytext').value += document.getElementById('b3').value} />
                        <input type="button" id="b4" value="4" onClick={() => document.getElementById('mytext').value += document.getElementById('b4').value} />
                        <br />
                        <br />
                        <input type="button" id="b5" value="5" onClick={() => document.getElementById('mytext').value += document.getElementById('b5').value} />
                        <input type="button" id="b6" value="6" onClick={() => document.getElementById('mytext').value += document.getElementById('b6').value} />
                        <input type="button" id="b7" value="7" onClick={() => document.getElementById('mytext').value += document.getElementById('b7').value} />
                        <input type="button" id="b8" value="8" onClick={() => document.getElementById('mytext').value += document.getElementById('b8').value} />
                        <br />
                        <br />
                        <input type="button" id="b9" value="9" onClick={() => document.getElementById('mytext').value += document.getElementById('b9').value} />
                        <input type="button" id="b0" value="0" onClick={() => document.getElementById('mytext').value += document.getElementById('b0').value} />
                        <input type="button" id="bdot" value="." onClick={() => document.getElementById('mytext').value += document.getElementById('bdot').value} />
                        <input type="button" id="bequal" value="=" onClick={() => document.getElementById('mytext').value = eval(document.getElementById('mytext').value)} />
                        <br />
                        <br />
                        <input type="button" id="bplus" value="+"
                            onClick={() => document.getElementById('mytext').value += document.getElementById('bplus').value} />
                        <input type="button" id="bminus" value="-"
                            onClick={() => document.getElementById('mytext').value += document.getElementById('bminus').value} />
                        <input type="button" id="bmulti" value="*"
                            onClick={() => document.getElementById('mytext').value += document.getElementById('bmulti').value} />
                        <input type="button" id="bdiv" value="/"
                            onClick={() => document.getElementById('mytext').value += document.getElementById('bdiv').value} />

                        <br />
                        <br />
                        <input type="button" id="bclear" value="C"
                            onClick={() => document.getElementById('mytext').value = " "} />

                        <input type="button" id="backspace" value="Backspace"
                            onClick={backclear} />


                    </div>

                </div>

            </div>


        </>
    );
}
export default Normal;