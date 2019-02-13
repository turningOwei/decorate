package com.decorate.model;

import lombok.Data;

import java.io.Serializable;

/**
 * @author turningOwei
 */
@Data
public class RoomPlace extends BaseEntity implements Serializable {

    private Long projectId;

    private String roomPlaceName;

    private Integer orderFlag;

}