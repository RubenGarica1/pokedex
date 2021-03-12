import React from "react";
import { connect } from "react-redux";
import styles from "./wraper.module.css";
import Image from "next/image";
import { Cookies } from 'react-cookie';
import {deleteUser} from '../../actions/userActions'
const cookies = new Cookies();

export const Wraper = (props: { children?: JSX.Element|JSX.Element[], user: String, login: any, userReducer: any, deleteUser: any}) => {
  return (
    <div className={styles.container}>
      <div className={styles.User}>
        <div>
          <div className={styles.UserData}>
            <Image
              alt="logo"
              src="/logo.png"
              width="120"
              height="45"
              quality={50}
              priority={true}
            />
            <div className={styles.userImage}>
              <Image
                alt="logo"
                src="/avatar.png"
                width="140"
                height="140"
                quality={50}
                priority={true}
              />
            </div>
            {props.user !== "" ? (
              <div>
                <div className={styles.nameUser}>ASHK123</div>
                <div className={styles.levelUser}>Level 1</div>
                <div className={styles.textUser}>"Work hard on your test"</div>
              </div>
            ) : (
              <div>
                <div className={styles.nameUser}>Registrate</div>
                <div className={styles.textUser}>"Work hard on your test"</div>
              </div>
            )}
          </div>
          <div className={styles.logout}>
            <div className={styles.button}>
              <div className={styles.iconLogout}>
                <Image
                  alt="logo"
                  src="/logout.svg"
                  width="23"
                  height="23"
                  quality={50}
                  priority={true}
                />
              </div>
              {props.userReducer.token== "" ? (
                <div className={styles.titleLogout} onClick={()=>props.login(true)}>LOGIN</div>
              ) : (
                <div className={styles.titleLogout} onClick={()=>{cookies.set('token', ''); props.deleteUser()}}>LOG OUT</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.children}>{props.children}</div>
    </div>
  );
};

const mapStateToProps = ({userReducer}) => ({userReducer});

const mapDispatchToProps = {deleteUser};

export default connect(mapStateToProps, mapDispatchToProps)(Wraper);
