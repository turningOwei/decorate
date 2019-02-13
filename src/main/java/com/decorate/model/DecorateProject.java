package com.decorate.model;

import lombok.Data;

import java.util.Date;

/**
 * @author turningOwei
 */
@Data
public class DecorateProject extends BaseEntity {

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

    private Integer orderFlag;

}