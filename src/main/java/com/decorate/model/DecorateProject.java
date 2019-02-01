package com.decorate.model;

import java.util.Date;

public class DecorateProject {
    private Long id;

    private String projectName;

    private String ownerName;

    private String ownerMobile;

    private String projectAddress;

    private Date projectStartTime;

    private String designer;

    private String designerMobile;

    private String constructionManager;

    private String constructionManagerMobile;

    private String remark;

    private Date createTime;

    private Date updateTime;

    private Boolean invalid;

    private Long operateId;

    private String memo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName == null ? null : ownerName.trim();
    }

    public String getOwnerMobile() {
        return ownerMobile;
    }

    public void setOwnerMobile(String ownerMobile) {
        this.ownerMobile = ownerMobile == null ? null : ownerMobile.trim();
    }

    public String getProjectAddress() {
        return projectAddress;
    }

    public void setProjectAddress(String projectAddress) {
        this.projectAddress = projectAddress == null ? null : projectAddress.trim();
    }

    public Date getProjectStartTime() {
        return projectStartTime;
    }

    public void setProjectStartTime(Date projectStartTime) {
        this.projectStartTime = projectStartTime;
    }

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer == null ? null : designer.trim();
    }

    public String getDesignerMobile() {
        return designerMobile;
    }

    public void setDesignerMobile(String designerMobile) {
        this.designerMobile = designerMobile == null ? null : designerMobile.trim();
    }

    public String getConstructionManager() {
        return constructionManager;
    }

    public void setConstructionManager(String constructionManager) {
        this.constructionManager = constructionManager == null ? null : constructionManager.trim();
    }

    public String getConstructionManagerMobile() {
        return constructionManagerMobile;
    }

    public void setConstructionManagerMobile(String constructionManagerMobile) {
        this.constructionManagerMobile = constructionManagerMobile == null ? null : constructionManagerMobile.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Boolean getInvalid() {
        return invalid;
    }

    public void setInvalid(Boolean invalid) {
        this.invalid = invalid;
    }

    public Long getOperateId() {
        return operateId;
    }

    public void setOperateId(Long operateId) {
        this.operateId = operateId;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo == null ? null : memo.trim();
    }
}