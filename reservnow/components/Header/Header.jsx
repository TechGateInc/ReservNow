"use client";
import "../Header/header.css";
import Search from "./Search";
import { useState } from "react";
import Link from "next/link";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="header">
        <div className="Headerlogo">
          <p>Logo</p>
        </div>
        <div className="SearchBarHolder">
          <Search />
        </div>
        <div className="ProfileSection">
          <div className="ReserveLink">
            <p style={{ fontSize: 12, color: "black" }}>
              {" "}
              Reserve Event Centre
            </p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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
            seDAAAAAElFTkSuQmCC"
              width={20}
            />
          </div>

          <div className="profileHolder" onClick={toggleDropdown}>
            <div className="profileHolderIcons">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nO3Vs
             QkAMAwDwd9/rGiwZIIUAYs0f6DaIBAGSQUBdjn5dXg1GpOunJM0Jn4nSTw4Ff6YkoE1i0QAAAAASUVORK5CYII="
                  width={20}
                />
              </div>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKvklEQVR4nO1dCbCWUxh+7u323xbcCCMpWqTGlpIGyZKyjTWUPTcU4o4xZGfGVmgn2aVyLcmMYYwJ1VgKJVQKiRIVKpW03Nv9zWve3/zzzvv933bO+f7/9j8zZ6Z7u9/7nm8557zLc94DFFFEEUUUUUT9RQrAIQD6ArgdwIsAZgGYB+BHAGsA/M1tDf9uLv/Ni3xNX5ZBsooIiQYAugIYCmA6gH8ApA01kvUxgGEATi6+IG+UAjgBwAsANhh8AX7tLwDPATgeQElx6AAtATwA4GeHLyHt0agP93Ofdjq0BfAUgK0BH9ZyAO8CGAVgMICTAHRhOXsDaMptb/5dF/6bwXzNuywjiC7q0wQAbbAT4AAAkwDU+DyU3wC8BOBKvsak/kruw28+faA+TgTQGvUQDQFUAdjks+C+BuBMAGWO1q0ePFI35ujXZgD3AShHPQFNHYtz3PAS/mqbJtjHptyH73L081s2PAoWZfxl7fC4wW8AXM5mbr6glEfoFx59rgMwhkd8QYHm3U89bmoVgEvy3MwsAXAZgNUe90C+TCsUCPoAWKvcRC2AsQAqUDhoBmAc913ez5/sXOY1LgawXek8hTO6oXBxFIBlyn1tA9AfeYoqj/ViqsFR0Y5N4dEAPmRjYTV/BJvYuZvD/382gCYwO1reUO6P7vkG5Bnu87DjTXR0LwB3sxEQ1vuml3UzgMYwt7ZUeUxh9yJPUOXhU9AXGgcVAEZwFDcdsy1kD94UzgGwRdFzI/JgzZDT1HoAPWPK7RUi1BG0/cIR5CMNmdo9+V7l9JXYmnKKsoBTBzvHlFvpMSWk2XqrBnATW3MH8pRGeY5dOTRCkdu7OCfi9XKWAhhkwPvurLyUbUlYX/srpi1NU8cZeBl1ygP8BMBZEb7s8zj04fVi5gM4yMBI2aKYxM78FPJSZysLeNw1o6sS/d3AVlUcXOIzlW3k6HDcNaVWcR5dxOTwqHJTQ2LKLFPiXWv5JZmwjNrzaKFQ/B8e1th+FowbykxaRS9lSnndgNyrlcWxF+ygMb8YeR+vGHjx0k8hHSfCEso5MisXxwoDN7JUyB0H+7hH+aK7GXAelylRYivkijuVdYNMyLjooRgH+8A+SpS18BkDcrsr68ltMIw2CvuDwhMm8JiQWw13OF0x2034KOOE3L9NZx6nCAWU/tzNkGz5lfaFOzRQFvkjDMhtpoTuKR1sBO2VIXiRwYSQNHVbwC3eFPoHGpJ7mTLFGwnfPCMEf2kwudRSyP4D7nG/6AP9bAL0jL4Wsil/HwutOBSQLfR8mM0zSM/ZNQaLPhAFyBT6Cdlb4/K+HlJMOJpmTOF4If8DuMc1og9PG16jpKtAxMBIoAe/QggbALPoLeS/B/cYJPrwrGH5lUL+z1E/6l5KXMlkBg4cjMzWMQPuca3oA3F9TVOMJB8tEp1oouUvB2xiyikx6WwnTdOmMTHuS08pbD4bJLFWSkDRNV4Qfbjegg5ttmkYJ5zxi+HFPHvRqxHBuBTcYoa417hpBA2lCpf4mDiBN9qJZAs/Cl2t4RarhP6OlvRMEnooNhgYM8XFRPm0BRmyPgtuM5/Zujdamgk0a+v9oBc2UsIZNtORd1jylIPgfKGbPkRXL39L0Jz+4eJCiu/bxKkJ+iJjTTltASF3ih0a5KILxUVvWe7knoqlVQI3+EHojktf8sM7USLbd4uLKF9hExVKrqUD7KOj0FnHlCKbGBllYZ8sLqJ8t008LvSlAVwF+7hF0UtTmMswDW3b88XH4iIKANpCI2V0PMC/tw3S8aDQvdny1rUThb6PglwkSc1UAcEWughdi+EeSyxkDL1wmNBF+RJf/CQuInPNFmQ+ZC7cQ1JOqU+20CaKBSspontY7GBrxTZPwR1SCg00LmEujEUZKEMqnUKbD4jM23VCXw+4Q0/F5LaJcqGPnrUvZMrW9hf7mtA3nVkbttGMwxcm2Yt+SAl99Kx98ae4qLnlTp6hmJ9p3mRjCws9dFLUwCaaC330rPNqUc9MW7OUh7PRksde4lG5YaaDCMEBURb1BeKig2EfxMWapvC/bBSAaSd01HLE2QV99dAoZu8nDh1DieFC93UWdAxxvWUgrmM4xXHoJFeH5xueRjTymsv6JTJ0Qkmr0NlC2qDjCillfjeZUj1XWadc+j0jogQX+zkOv0tMUEaJia1hZSwrW/aTcIu3hf4Lgu4sDW0JGERbpcCZiU3599oiP4eAtGApthVoy5fLFG4QHlNNzK1hJygv2dj2gBgp3MBR7VkOSQ5eDtSvog+bOIcRFrcozMFfHTi8EgNEH6hWS2Q23/Nwj97KxkwqVBAWsrgByTwN7iFHPWVmI3NubRHlwm4VqIkgQ05VJNM1SpURf2wYASlTBOGYaKx41WEhvX8X2UjjVFJwvtcmKzzKC9kRQYac9lJ5wB+mn2Pv3dhgsO5UUDSqBy+ksVI+nSq1RiJCrxSC4tYdCYvdhH4iRISFzAhS1SCXkBTSFXHW4+EKCcHl4t5C6P89ggy57dlFVDeDUoVE8XA+b/oMsiU7HTNqIL1jCr+7gmSBbjeRX3peCJ3nkOo5QOimXE1YLEjIyS3hLeSmS3f8R+uUpiNtireNo5RqbYGYfj7W4jpHJWuvUHwoY6OzWghfZbEgchknkbYqNxSl+lsn5YPayjpsFRjTSmsEyn0ERTuF8kk1p0yiIVtxkpGeabfGkH2bh8ylbAWlLG9z2Gz42A01cVXDpYjiohMnwdZ4PLQMAz/OulWiMM+l9TbSEG32aCVcQ5uSrDhp3ytWTxQOVXPe7SorAaWVjB59waYw0OeskDRTS6v4tJ6w2F3ZlLPEJoG7j+L5EtEtCMo5hfqmYkrLtg3AeEt5GKKKPhHguKUazvD1CxGhmCpk1FksVfg/Rimdz1VSvCVPSdqJCbKt5/nXRUJsPy7CJqmsXqe5jfHxIbQimLY3O/0HWgA/E4pruVRqNtqwD+M3GnZw0ZlLE4iVZabi/ry3sTbAqJnMBZyzcZ5y7WyXB7+0Vr74LUyUDnLeVJrn2mEJ5LVzYV/uu3To0orHPYyn4e5Kseb1SZzydrpiTdBLWuQz9MezJZLv6MrTlOQ6ywV7rfKybHOEc3qjWmlwzd6/MYFIqwk04SxjrgPDshdxF1GM0Jsns0fM0HpyKHApx8FkKY7sRmeV5AVk5blI9TwKBLLyRKbRBtKCOPJoWoEdBOaFXZSYXmaaolkgL3GFx7Gqiy1vprSN7kqiKbOAJ75mBLG+ZNg846uMSvhEzyijYrSHf7IuSWsqLMgG/9xjrv2JCzEnwfMKilI+zsnrWPE5NqK3tlHGzpOXWbyQ2d/5duLnyTkcw8zRqwVtNfbJkeOg9hVvCmqSYB+bcv1euZknu33H1Kh6gUacT5FJLjknj2Eaq4vprAHvUx/rseZl2j98yFi9Ob5bZh6rc5wgnea2muukXxi3NLdAS5b5lE9CLGOETEkiJpUEOjCdUjs3N600OtPwVa4UVMk84/bMscpOkDVjLld7/ptKvubVEOcibmfarIzo7hQgS+URhRmeTqCtZGKg7X35BYEGvPhPMnTUatC2iWlCvfPcDE/cXO7K4YjpAVKtYVoN58yHsXlbLxdq22jChc76886uanbMFvG6sI79gzr+93L+P/qbl3mzZ3+WkURGsogiiiiiiCLgAv8CGrAKLQHwCPcAAAAASUVORK5CYII="
                  width={20}
                />
              </div>
            </div>
            {isOpen && (
              <div className="DropdownContent">
                <div className="contentSection1">
                  <Link href={""} className="DropdownLinks">
                    Signin
                  </Link>
                  <Link href={""} className="DropdownLinks">
                    Signin
                  </Link>
                </div>
                <div className="contentSection2">
                  <Link href={""} className="DropdownLinks">
                    Signin
                  </Link>
                  <Link href={""} className="DropdownLinks">
                    Signin
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
