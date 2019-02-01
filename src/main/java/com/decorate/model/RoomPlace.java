package com.decorate.model;

public class RoomPlace {
    private Long id;

    private Long projectId;

    private String roomPlaceName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getRoomPlaceName() {
        return roomPlaceName;
    }

    public void setRoomPlaceName(String roomPlaceName) {
        this.roomPlaceName = roomPlaceName == null ? null : roomPlaceName.trim();
    }
}