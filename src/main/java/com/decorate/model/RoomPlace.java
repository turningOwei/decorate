package com.decorate.model;

import lombok.Data;

import java.io.Serializable;

/**
 * @author turningOwei
 */
@Data
public class RoomPlace extends BaseEntity implements Serializable {

    private String roomPlaceName;

    private Integer orderFlag;

}