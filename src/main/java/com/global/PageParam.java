package com.global;

import java.util.List;

/**
 * Created by turningOwei on 2016/12/18.
 */
public class PageParam<T> {
    public Boolean isPage;
    public Integer page;
    public Integer start;
    public Integer limit;

    public List<T> list;

    public PageParam(){}

    public PageParam(Boolean isPage, Integer page, Integer start, Integer limit) {
        this.isPage = isPage;
        this.page = page;
        this.start = start;
        this.limit = limit;
    }

    public Boolean getIsPage() {
        return isPage;
    }

    public void setIsPage(Boolean isPage) {
        this.isPage = isPage;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }
}
