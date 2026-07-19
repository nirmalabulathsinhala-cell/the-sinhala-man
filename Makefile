# Makefile for Sinhala FM Helper macOS Application

APP_NAME = Sinhala FM Helper
APP_DIR = $(APP_NAME).app
MACOS_DIR = $(APP_DIR)/Contents/MacOS
RESOURCES_DIR = $(APP_DIR)/Contents/Resources
PLIST_FILE = $(APP_DIR)/Contents/Info.plist

SOURCES = main.swift AppDelegate.swift EventTapManager.swift FMAbhayaConverter.swift

all: build

build:
	@mkdir -p "$(MACOS_DIR)"
	@mkdir -p "$(RESOURCES_DIR)"
	swiftc -O $(SOURCES) -o "$(MACOS_DIR)/sinhala-fm-helper" -arch arm64 -arch x86_64
	cp Info.plist "$(PLIST_FILE)"
	@echo "Build successful! Created $(APP_DIR)"

run: build
	open "$(APP_DIR)"

clean:
	rm -rf "$(APP_DIR)"
	@echo "Cleaned build artifacts."

.PHONY: all build run clean
