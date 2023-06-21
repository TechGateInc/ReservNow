"use client";
import styles from "./emailVerification.module.css";

export default function EmailVerification({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className={styles["email-root"]}>
      <div className={styles["email-modal"]}>
        <div className={styles["email-modal-header"]}>
          <p>Log in and sign up</p>
        </div>
        <div className={styles["email-modal-content"]}>
          <h2>
            Welcome to{" "}
            <div className="email-modal-logo">
              <img
                src="/images/RNL.svg"
                alt="ReservNow"
                style={{ height: "18px", marginLeft: "4%" }}
              />
            </div>
          </h2>
          <div className={styles["email-modal-form"]}>
            <div className={styles["form-content"]}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <p>
              We'll call or text you to confirm your number. Standard message
              and data rates apply. Privacy Policy and Terms of Service
            </p>
            <div className={styles["submit-btn"]}>
              <button
                onClick={handleSubmit}
                disabled={formData.email === "" ? true : false}
              >
                Continue
              </button>
            </div>
          </div>
          <div className={styles["or"]}>
            <div className={styles["left-line"]}>
              <hr />
            </div>
            <div className={styles["right-line"]}>
              <hr />
            </div>
            <p>or</p>
          </div>
          <div className={styles["email-options-cont"]}>
            <div className={styles["email-options"]}>
              <button>
                <div className={styles["icon"]}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2ZzUrDQBDH82S7Vby1JTsoPpAieFBv0qMP4UyEQq03L4KWWh/Am4eASXupYEeiWL9o6W5jdgPzgzku+f/2m00UCYIgBE3DYKwArxTgRANxFaUAJwqor+KkvVZ4beiwqtB6URk8cO557+HhU4Ja1gLFtAlI4NJewODYe3CYV24tEEBo/l4ioEvoxc2dhI86Q767TznLpzyb8Q+CHoGN7YSvb554GTpkgePOcGn44AUGo5RrLZCPX/4E3ju55a3di5Xaexd4/b1imd/XxartvQvYThktAvA/vb6I52wa3gjYMBil9RY47z7WW+D07CE8AdmFQEaAZAppOYlJdiGWbRTkNspyEuu6XSVUyU+L6wlgZi8A1C/7QudcBnv2AnHS9h4cPqoB2IxcKH4u+A6vgPadwn9JUKt4n6/yuV0V3zLYc+55QRCEqCreAAESa+zxbT1rAAAAAElFTkSuQmCC"
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className={styles["text"]}>Continue with Facebook</div>
                <div></div>
              </button>
            </div>
            <div className={styles["email-options"]}>
              <button>
                <div className={styles["icon"]}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className={styles["text"]}>Continue with Google</div>
                <div></div>
              </button>
            </div>
            <div className={styles["email-options"]}>
              <button>
                <div className={styles["icon"]}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8klEQVR4nO2aTYhNYRjHfzMYk3yEBhGpwcLGZygL0cwCkQ2hRFnIxoIyubFhoVnIbWzEYmRYsPA5O5FSPvKRfEwykWiURsZnxufVW++UbvO+7zkz9zn3mXPvr/7N7nR/z5xz3vd9zgO6GQZsAlqBt8ApSoQhQAb4BOT+y3FKgFnA4zzxnjSScuYD7x3yJmtI+X/+s0f+DzCGlFINPPLIm5wjxewPyJssIKWMBj4G5FtIMXsC8s+BEaSY+x75TmAmKaYa+OWQ7wLmknImO+RvANMoAcblid8DNgMVlAgVwEqgHpjEAKcWaAAuA+3AF/scm7f4SWAVUBXzejuAs8AT+0I013wN3AKOAMtjXlOEhcAV4G+EzYzZ5zd53uxmO3wQeBbhWj3pAHYBQxP2ZjhwLKJ4b7kJ7AO2A4djSvcWc4Kck5T8FKCtnz9YIuYRqZOWnwq8USDryndgnpT8KOCpAslQXki9E5oVyIViVonFEvJLFciFYnoKExDi2gC47cdLyS9SIOhLt/TBqUmBpC+moyTKSwWSrnTZrpIYtQokfTF3pyirFUj6sky6ALsVSLryO4nTYFaBqCvmg6k4RxWIuvIgiQKcUCDqysNSvwPeJVGARgWivkyULkCDAklftkkXYK0CyVBrTZTZCiRDEesAYTsr3QokfbkLDEKQ2wokQzFfmcU4pEAwFNOe3yhVgDoFglHPBuZrUsGp6mVmT3PMQOXYQhehRYFY3EbJhkIWoF6BVNysKGQBKoFXCqTiHJUHU2B2KhCLmgMIMNI+Wznl+QbUIERGgWAoposlOsPfoUDSlU6JJTCfdQpEXdlCQlxUIJuf60lOmNUoexS+AtNJmCV2/51TkK0UiYwCeTNKV1SyRZS/Y1emolIJnI75wz/YoYsz9qDV2ofhq7YklryomLfvXuBHYIyt2Y7bmKK5epBZu5775C9JfxbvKzPsJ+t2WwwjctUORJqtdJxe5Hrggj3Y/LR/z9sR2TJlypQpU4b+8Q/0NcSARbXJOQAAAABJRU5ErkJggg=="
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className={styles["text"]}>Continue with Apple</div>
                <div></div>
              </button>
            </div>
            <div className={styles["email-options"]}>
              <button>
                <div className={styles["icon"]}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQklEQVR4nO2aa0xTdxiHD05dlsW4bIl+wEQzvKDT6KZuMC8gtkK5tBY4QGkBwcEsigSTucypJfswmLtE9mGJc4mJSyRxEwUv6FDQMW9xfpn6YSZq4sLcxWiMmdEpPsvbtFtbQOhpu3DMeZInOZf//33f3wm9hFRRDAwMDAwMDAwMDAz6Y4aH0fGr+Sh+Nb9OWAN6MH4NPRPW0CizK5EysZrGSdWgS900RPwAElbRM9kNCW7eVHTCy9Us9M68ip6IiyW+DaKiMyKee24Vo2ZWsmVmJejcLSkeRob9AGZX8MmclfA0OHslH4f9AOaX8+f8CphfwSpFp8jsvgx/hL05eQWISWXcT17Bu4qHEYpuIC65jKrkMv7y5wi7xKJSCHRhKQeTXYxThjkyo8waOn/YhZa4QEwtwZbq5Kb32MnvqU6yBtpTd5I9dacgpp5kz0D9U0owpbro8c7u5HZqMYX+HGE/ALMTRDlOK2K8uZh237XHJidNGRk8G7rn/W4ObvwBYqn06O8Ty+yk3lRMr8xoctKZ4WRCaI6wsDhA/O8KcRYHtRkOHsj1DAcXLMXMCtyz7UdGNZygvuE4vQ0nIAbu/PQUzwX2THcyzeLgvG/ehxYH9arKMwPnGCI5hSCGXrcWMS+ngMtyL7uQe9ZCakPXbD2OuamL35q6ICp2cnvrcdTQPlkFlGYXctc7SwHXcgpYMNQcg2JXQezvntXKGLvKNv+a5SotqsqLgWu2H2X89g6OfHUUIvT0ji4mBdZWVcba89nl729X2W2z8UK4OZ6Img/iE9eo5OfncUvW5edxXVVJCbzv8TCi+Ttqmw/zd/MRCNPe5sM0ycsqsGaBnSQ1j6u+nnfUPFyR5ugXRy6IyiAU5zKxKJduWVtkp9eRS1NVVfDQrYdIajvE1bZ2GIqt7fyy7wCLA2ukpDDSYafeYeeRt1cuZ10qk6OVow8ly0FUhoAMV2KjvsTGI9njsnHWlRM8XEcHY48dYPexAzCIbR0tvBT6kF02un21e0tsfR9yNHIEUW4FUQmDshySVli54tt7pzyn75/nmf2Unmnj3pk2CLKV+6f3UQvEhcyRX27llrdmDtfLs4NfZrHI4aUyG0QlTKpMjK3MYpd//1vZ7C4LeYO61MorP7Vw8cJe8PnzpX28GrimwsqYymy2+etUZtOyclnwG20scyjVWSAqGnFnUerO5K6vzjV3ZvA/VG7s5Pkr3+IW5Tjw3moL86ozuSx73Zncc2f1/aiNeY61FhCVCKhNZ1qNhfNSp8bCwxpL8JeUvhC31kJtTQYPvHsyuLA2i5mRzKA5x7p0EJUIqZrLqLp06uuW0eur2VmXRXyfQdMYvy6ddt+ax+uW0VTTz9ft/y3HejOIkQ7wbz0T6evN3JCa75i5ud5MmUdltCjHvmvS84asjVpfrTk2mEBUoojHzLgNSznor/2eiYei/1zuyZpo9tScY3MaiErUIW7zUgo3pXFu0xIeeE3j3MYlFMi9aHfTnOODVBCVGOJJYaQYyx6ac3y4GERF52jOsWURiIrO0ZzjswUgKjpHc47Pk0FUdI7mHF+8AaKiczTn+PJ1EBWdoznHjnkgKsMU/3wDGbou7AZfvwaiMkzxzzeQoevCbtA8B0St58MFzXN9MxtErefDBc1z7Z0FotbzWOHvM5gRz7X/FRC1nscKf5/BjHiu9ukgKjpHc46ORHo6EqFjKgsVnXJ0Oou8GRI1/FiqawqNXVPhabBzioafy12cwejuBBq/T6CnezLoUe/sCTRKlrAfgIGBgYGBgYGBgYHyVPMPNEVWlkHq+EQAAAAASUVORK5CYII="
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className={styles["text"]}>Continue with Mail</div>
                <div></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
