package com.global;

import java.io.Serializable;

/**
 * Created by turningOwei on 2016/12/22.
 */
public class ExtGrid implements Serializable{

    private Object data;
    private Integer totalCount;
    private boolean success;

    public ExtGrid(){}

    public ExtGrid(Object data){
        this.data = data;
    }

    public ExtGrid(Object data, Integer totalCount, boolean success) {
        this.data = data;
        this.totalCount = totalCount;
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
