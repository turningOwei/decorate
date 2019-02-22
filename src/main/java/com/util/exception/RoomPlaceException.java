package com.util.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 16:46
 */
@Getter
@AllArgsConstructor
public enum  RoomPlaceException implements ExceptionType {
    NAME_REPEACT(201000, "名称重复");
    private int code;
    private String description;
}
