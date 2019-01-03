package com.global;

import java.io.Serializable;

/**
 * Created by turningOwei on 2016/12/21.
 */
public class ExtJsonForm implements Serializable{
    private boolean success;
    private Object data;

    private String msg;

    public ExtJsonForm(){}


    public ExtJsonForm(boolean success,String msg){
        this.success = success;
        this.msg = msg;
    }

    public ExtJsonForm(boolean success,Object data){
        this.success = success;
        this.data = data;
    }

    public ExtJsonForm(boolean success,Object data,String msg){
        this.success = success;
        this.data = data;
        this.msg = msg;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
