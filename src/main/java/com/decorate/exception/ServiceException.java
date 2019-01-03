package com.decorate.exception;

import lombok.NoArgsConstructor;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:35
 * @since v1.0.0
 */
@NoArgsConstructor
public class ServiceException extends Exception {
    public ServiceException(String message) {
        super(message);
    }
}
